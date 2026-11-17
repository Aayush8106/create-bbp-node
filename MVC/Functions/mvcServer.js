import fs from "node:fs";
import { routesData } from "../Data/routesData.js";
import { controllerData } from "../Data/controllerData.js";
import { modelData } from "../Data/modelData.js";
import { mvcServerData } from "../Data/mvcserverData.js";
import { packageData } from "../../Common-Files/Package-Json.js";
import { execSync } from "node:child_process";
import { envData } from "../../Common-Files/envData.js";

export default function mvcServer(){
    fs.mkdirSync('controllers');
    fs.writeFileSync('./controllers/index.js',controllerData);
    fs.mkdirSync('routes');
    fs.writeFileSync('./routes/index.js',routesData);
    fs.mkdirSync('models');
    fs.writeFileSync('./models/index.js',modelData);
    fs.writeFileSync('server.js',mvcServerData);
    fs.writeFileSync('.env',envData);
    fs.writeFileSync('package.json',packageData);
    execSync('npm install express dotenv');
    console.log('Created backend server file with MVC...');
};