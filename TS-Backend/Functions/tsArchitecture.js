import { select } from "@inquirer/prompts";
import normalTSOptions from "./normalArchitecture.js";
import mvcTSOptions from "./mvcArchitecture.js";


export default async function tsArchitecture(){

    const answer = await select({
        message : "Choose architecture:",
        choices : [
            {name : 'Normal' , value : 'normal'},
            {name : 'MVC' , value : 'mvc'},
        ]
    });

    if(answer==='normal'){
        normalTSOptions();
    }else if(answer==='mvc'){
        mvcTSOptions();
    }

}