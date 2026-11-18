import fs from "node:fs";
import { routesData } from "../Data/routesData.js";
import { controllerData } from "../Data/controllerData.js";
import { modelData } from "../Data/modelData.js";
import { mvcServerData } from "../Data/mvcserverData.js";
import { srcPackageData } from "../../Common-Files/SRC-Package-Json.js";
import { execSync } from "node:child_process";
import { envData } from "../../Common-Files/envData.js";

export default function mvcServer(){

    fs.mkdirSync('src');

    fs.mkdirSync('src/controllers');
    fs.writeFileSync('src/controllers/index.js',controllerData);

    fs.mkdirSync('src/routes');
    fs.writeFileSync('src/routes/index.js',routesData);

    fs.mkdirSync('src/models');
    fs.writeFileSync('src/models/index.js',modelData);

    fs.writeFileSync('src/server.js',mvcServerData);
    fs.writeFileSync('.env',envData);
    fs.writeFileSync('package.json',srcPackageData);
    
    execSync('npm install express dotenv');
    console.log('Created backend server file with MVC...');
};