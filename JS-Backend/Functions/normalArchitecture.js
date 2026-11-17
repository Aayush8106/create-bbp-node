import { select } from "@inquirer/prompts";
import normalServer from "../Normal/Functions/normalFunc.js";
import normalSocketServer from "../Normal-Socket/Functions/normalSocket.js";

export default async function normalOptions(){

    const architecture = await select({
        message : "Normal options:",
        choices : [
            {name : 'Normal Backend', value : 1},
            {name : 'Normal + Socket.IO', value : 2}
        ]
    });

    if(architecture===1){
        normalServer();
    }else if (architecture===2){
        normalSocketServer();
    }
}