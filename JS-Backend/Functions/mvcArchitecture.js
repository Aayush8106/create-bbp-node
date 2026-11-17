import { select } from "@inquirer/prompts";
import mvcServer from "../MVC/Functions/mvcServer.js";
import mvcSocket from "../MVC-Socket/Functions/mvcSocket.js";

export default async function mvcOptions(){

    const architecture = await select({
        message : "MVC Options:",
        choices : [
            {name : 'MVC Backend' , value : 1},
            {name : 'MVC + Socket.IO' , value : 2}
        ]
    });

    if(architecture === 1){
        mvcServer();
    }else if(architecture === 2){
        mvcSocket();
    }

}