import { Router } from 'express';

import itemsController from "./controllers/itemsController";

const router = Router();

router.use('/items', itemsController);

export default router;