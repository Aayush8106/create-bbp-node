import fs from "node:fs";
import { packageData } from "../../Common-Files/Package-Json.js";
import { execSync } from "node:child_process";
import { envData } from "../../Common-Files/envData.js";
import mvcServerData from "../Data/serverData.js";
import routesData from "../Data/routesData.js";
import controllerData from "../Data/controllerData.js";
import {modelData} from "../Data/modelData.js";
import socketData from "../Data/socketData.js";

export default async function mvcSocket() {

    fs.mkdirSync('controllers');
    fs.writeFileSync('./controllers/index.js', controllerData);

    fs.mkdirSync('routes');
    fs.writeFileSync('./routes/index.js', routesData);

    fs.mkdirSync('models');
    fs.writeFileSync('./models/index.js', modelData);

    fs.mkdirSync('socket');
    fs.writeFileSync('./socket/index.js', socketData);

    fs.writeFileSync('server.js', mvcServerData);
    fs.writeFileSync('.env', envData);
    fs.writeFileSync('package.json', packageData);

    execSync('npm install express dotenv socket.io');

    console.log('Created backend server with MVC + Socket.IO ...');
}