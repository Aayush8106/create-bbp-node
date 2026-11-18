import fs from "node:fs";
import { mvcServerData } from "../Data/serverData.js";
import { execSync } from "node:child_process";
import { envData } from "../../Common-Files/envData.js";
import { srcPackageData } from "../../Common-Files/SRC-Package-Json.js";
import {routesData} from "../../MVC/Data/routesData.js";
import {controllerData} from "../../MVC/Data/controllerData.js";
import {modelData} from "../../MVC/Data/modelData.js";
import socketData from "../Data/socketData.js";

export default async function mvcSocket() {

    fs.mkdirSync('src');

    fs.mkdirSync('src/controllers');
    fs.writeFileSync('src/controllers/index.js', controllerData);

    fs.mkdirSync('src/routes');
    fs.writeFileSync('src/routes/index.js', routesData);

    fs.mkdirSync('src/models');
    fs.writeFileSync('src/models/index.js', modelData);

    fs.mkdirSync('src/socket');
    fs.writeFileSync('src/socket/index.js', socketData);

    fs.writeFileSync('src/server.js', mvcServerData);
    fs.writeFileSync('.env', envData);
    fs.writeFileSync('package.json', srcPackageData);

    execSync('npm install express dotenv socket.io');

    console.log('Created backend server with MVC + Socket.IO ...');
}