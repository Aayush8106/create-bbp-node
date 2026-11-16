export const routesData = `import express from "express"
import {getHome} from '../Controllers/index.js';

const router = express.Router();
router.get("/",getHome)

export default router;`;