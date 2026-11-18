#!/usr/bin/env node
// This above cmd is specifically used for using this particular file as executable file with node

import { select } from "@inquirer/prompts";
import jsArchitecture from "./JS-Backend/Functions/jsArchitecture.js";
import tsArchitecture from "./TS-Backend/Functions/tsArchitecture.js";

const language = await select({
    message : "Choose your language:",
    choices : [
        {name : 'JavaScript' , value : 'js'},
        {name : 'TypeScript' , value : 'ts'}
    ]
});

if(language == 'js'){
    jsArchitecture();
}else{
    tsArchitecture();
}