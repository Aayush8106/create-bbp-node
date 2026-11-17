import mvcServer from "../MVC/Functions/mvcServer.js";
import { select } from "@inquirer/prompts";
import normalOptions from "./normalArchitecture.js";
import mvcOptions from "./mvcArchitecture.js";

export default async function jsArchitecture(){

    const answer = await select({
        message : "Choose architecture:",
        choices : [
            {name : 'Normal' , value : 'normal'},
            {name : 'MVC' , value : 'mvc'},
        ]
    });

    if(answer==='normal'){
        normalOptions();
    }else if(answer==='mvc'){
        mvcOptions();
    }

}