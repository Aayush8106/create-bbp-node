import fs from "node:fs";
import { execSync } from "node:child_process";
import { envData } from "../../Common-FIles/envData.js";
import { packageData } from "../../Common-FIles/Package-Json.js";
import { tsconfigData } from "../../Common-FIles/tsconfigData.js";
import { tsMVCServerData } from "../Data/serverData.js";
import { controllerData } from "../Data/controllerData.js";
import { routeData } from "../Data/routeData.js";
import { tsModel } from "../Data/modelData.js";

export default function mvcTSServer(){

    fs.writeFileSync('.env',envData);
    fs.writeFileSync('package.json',packageData);
    fs.writeFileSync('tsConfig.json',tsconfigData);

    fs.mkdirSync('src');
    fs.writeFileSync('src/server.ts',tsMVCServerData);

    fs.mkdirSync('src/controllers');
    fs.writeFileSync('src/controllers/index.ts',controllerData);

    fs.mkdirSync('src/routes');
    fs.writeFileSync('src/routes/index.ts',routeData);

    fs.mkdirSync('src/models');
    fs.writeFileSync('src/models/index.ts',tsModel);

    fs.mkdirSync('compiled');

    execSync('npm install express dotenv');
    execSync('npm install -D typescript tsx @types/node @types/express');

    console.log('Created Backend with TS + MVC...');
};