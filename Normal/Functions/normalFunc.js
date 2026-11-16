import fs from "node:fs";
import { execSync } from "node:child_process";
import { envData } from "../../Common-Files/envData.js";
import { packageData } from "../../Common-Files/Package-Json.js";
import {serverData} from "../Data/serverData.js";

export default function normalServer(){
    fs.writeFileSync('server.js', serverData);
    fs.writeFileSync('.env',envData);
    fs.writeFileSync('package.json',packageData);
    execSync('npm i express dotenv');
    console.log("Created Normal backend server file...");
}