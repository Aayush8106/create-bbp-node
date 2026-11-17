import { envData } from "../../Common-Files/envData.js";
import { packageData } from "../../Common-Files/Package-Json.js";
import fs from 'fs';
import { execSync } from 'node:child_process';
import serverData from "../Data/serverData.js";

export default function normalSocketServer(){
    fs.writeFileSync('server.js', serverData);
    fs.writeFileSync('.env',envData);
    fs.writeFileSync('package.json',packageData);
    execSync('npm install express dotenv socket.io');
    console.log("Created Normal backend server with Socket.IO...");
}