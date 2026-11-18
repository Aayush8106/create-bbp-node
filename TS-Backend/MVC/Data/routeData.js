export const routeData = `import { Router } from 'express';
import { homeController } from '../controllers/index.js';
import type { Router as ExpressRouter } from 'express';

const router : ExpressRouter = Router();

router.get('/', homeController);

export default router;`;