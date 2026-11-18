import fs from "node:fs";
import { execSync } from "node:child_process";
import { envData } from "../../Common-FIles/envData.js";
import { packageData } from "../../Common-FIles/Package-Json.js";
import { tsconfigData } from "../../Common-FIles/tsconfigData.js";
import { serverData } from "../Data/serverData.js";
import { controllerData } from "../../MVC/Data/controllerData.js";
import { routeData } from "../../MVC/Data/routeData.js";
import { tsModel } from "../../MVC/Data/modelData.js";
import { socketData } from "../Data/socketData.js";

export default function mvcTSSocket(){

    fs.writeFileSync('.env',envData);
    fs.writeFileSync('package.json',packageData);
    fs.writeFileSync('tsConfig.json',tsconfigData);
    
    fs.mkdirSync('src');
    fs.writeFileSync('src/server.ts',serverData);
    
    fs.mkdirSync('src/controllers');
    fs.writeFileSync('src/controllers/index.ts',controllerData);
    
    fs.mkdirSync('src/routes');
    fs.writeFileSync('src/routes/index.ts',routeData);
    
    fs.mkdirSync('src/models');
    fs.writeFileSync('src/models/index.ts',tsModel);

    fs.mkdirSync('src/sockets');
    fs.writeFileSync('src/sockets/index.ts',socketData);
    
    fs.mkdirSync('compiled');
    
    execSync('npm install express dotenv socket.io');
    execSync('npm install -D typescript tsx @types/node @types/express');
    
    console.log('Created Backend with TS + MVC + Socket.IO...');
}