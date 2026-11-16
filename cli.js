#!/usr/bin/env node
// This above cmd is specifically used for using this particular file as executable file with node

import { select } from "@inquirer/prompts";
import normalServer from "./Normal/Functions/normalFunc.js";
import mvcServer from "./MVC/Functions/mvcServer.js";

const answer = await select({
    message : "Choose an option:",
    choices : [
        {name : 'Normal' , value : 1},
        {name : 'MVC' , value : 2},
    ]
});

if(answer===1){
    normalServer();
}else if(answer===2){
    mvcServer();
}