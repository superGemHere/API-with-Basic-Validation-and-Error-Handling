import { NextFunction, Router } from 'express';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import data from "../data.json";

import { itemValidator } from '../middlewares/itemValidator';
import createHttpError from '../utils/createHttpError';

const router = Router();


console.log("🚀 Items Controller Loaded");


interface Item {
    id: string;
    name: string;
    description: string;
}

let items: Item[] = [...data.items];

console.log("💉 Default data injected from data.json");
console.log(`📦 Loaded ${items.length} items from data.json`);

router.get('/', (req: Request, res: Response) => {
    res.json(items);
});

router.post('/', itemValidator, (req: Request, res: Response) => {
    const { name, description } = req.body;

    const newItem: Item = {
        id: uuidv4(),
        name,
        description,
    };

    items.push(newItem);
    res.status(201).json(newItem);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const item = items.find(i => i.id === req.params.id);
    if (!item) {
       return next(createHttpError('Item not found', 404));
  }
    res.json(item);
});

router.put('/:id', itemValidator, (req: Request, res: Response, next: NextFunction) => {
    const itemIndex = items.findIndex(i => i.id === req.params.id);
    if (itemIndex === -1) {
        return next(createHttpError('Item not found', 404));
    }

    const { name, description } = req.body;

    items[itemIndex] = { ...items[itemIndex], name, description };
    res.json(items[itemIndex]);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    const itemIndex = items.findIndex(i => i.id === req.params.id);
    if (itemIndex === -1) {
        return next(createHttpError('Item not found', 404));
    }

    const deletedItem = items.splice(itemIndex, 1);
    // Here im using status 200 instead of 204 because I want to return a message to show which item was deleted
    res.status(200).json({ message: `${deletedItem[0].name} deleted successfully` });
});

export default router;