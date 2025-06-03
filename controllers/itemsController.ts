import { Router } from 'express';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import data from "../data.json";

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

router.post('/', (req: Request, res: Response) => {
    const { name, description } = req.body;
    if (!name || !description) {
        res.status(400).json({ message: 'Name and description are required' });
    }

    const newItem: Item = {
        id: uuidv4(),
        name,
        description,
    };

    items.push(newItem);
    res.status(201).json(newItem);
});

router.get('/:id', (req: Request, res: Response) => {
    const item = items.find(i => i.id === req.params.id);
    if (!item) {
         res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
});

router.put('/:id', (req: Request, res: Response) => {
    const itemIndex = items.findIndex(i => i.id === req.params.id);
    if (itemIndex === -1) {
         res.status(404).json({ message: 'Item not found' });
    }

    const { name, description } = req.body;
    if (!name || !description) {
         res.status(400).json({ message: 'Name and description are required' });
    }

    items[itemIndex] = { ...items[itemIndex], name, description };
    res.json(items[itemIndex]);
});

router.delete('/:id', (req: Request, res: Response) => {
    const itemIndex = items.findIndex(i => i.id === req.params.id);
    if (itemIndex === -1) {
         res.status(404).json({ message: 'Item not found' });
    }

    const deletedItem = items.splice(itemIndex, 1);
    // Here im using status 200 instead of 204 because I want to return a message to show which item was deleted
    res.status(200).json({ message: `${deletedItem[0].name} deleted successfully` });
});

export default router;