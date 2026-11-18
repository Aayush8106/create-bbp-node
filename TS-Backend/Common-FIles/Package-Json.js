export const packageData = `{
    "name": "my-typescript-backend",
    "version": "1.0.0",
    "type": "module",
    "scripts": {
        "dev": "tsx watch src/server.ts",
        "build": "tsc",
        "start": "node compiled/server.js"
    },
    "allowScripts": {
            "esbuild": true
        }
}`;