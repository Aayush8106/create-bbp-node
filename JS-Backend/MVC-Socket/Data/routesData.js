const routesData = `import express from 'express';
import getHome from '../controllers/index.js';

const router = express.Router();

router.get('/', getHome);

export default router;`;

export default routesData;