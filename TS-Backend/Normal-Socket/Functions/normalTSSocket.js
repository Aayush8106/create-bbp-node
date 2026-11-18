import fs from 'fs';
import { execSync } from 'node:child_process';
import { envData } from '../../Common-FIles/envData.js';
import { packageData } from '../../Common-FIles/Package-Json.js';
import { tsconfigData } from '../../Common-FIles/tsconfigData.js';
import {tsServerData} from '../Data/serverData.js'

export default function normalTSSocket(){

    fs.writeFileSync('.env',envData);
    fs.writeFileSync('package.json',packageData);
    fs.writeFileSync('tsConfig.json',tsconfigData);
    
    fs.mkdirSync('src');
    fs.writeFileSync('src/server.ts',tsServerData);

    fs.mkdirSync('compiled');
    
    execSync('npm install express dotenv socket.io');
    execSync('npm install -D typescript tsx @types/node @types/express');

    console.log('Created Normal TS Server with Socket.IO...');
}