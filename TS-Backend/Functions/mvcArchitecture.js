import { select } from "@inquirer/prompts";
import mvcTSServer from "../MVC/Functions/mvcServer.js";
import mvcTSSocket from "../MVC-Socket/Functions/mvcSocket.js";

export default async function mvcTSOptions(){

    const architecture = await select({
        message : "MVC Options:",
        choices : [
            {name : 'MVC Backend' , value : 1},
            {name : 'MVC + Socket.IO' , value : 2}
        ]
    });

    if(architecture === 1){
        mvcTSServer();
    }else if(architecture === 2){
        mvcTSSocket();
    }
}