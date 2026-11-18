export const controllerData = `import type { Request, Response } from 'express';

export const homeController = (req: Request, res: Response): void => {
    res.send('<h1>Welcome to the TypeScript MVC Backend!</h1>');
};`;