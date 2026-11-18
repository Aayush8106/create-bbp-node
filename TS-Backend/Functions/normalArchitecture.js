import { select } from "@inquirer/prompts";
import normalTSServer from "../Normal/Functions/normalTSFunc.js";
import normalTSSocket from "../Normal-Socket/Functions/normalTSSocket.js";

export default async function normalTSOptions(){

    const architecture = await select({
        message : "Normal options:",
        choices : [
            {name : 'Normal Backend', value : 1},
            {name : 'Normal + Socket.IO', value : 2}
        ]
    });

    if(architecture===1){
        normalTSServer();
    }else if (architecture===2){
        normalTSSocket();
    }
}