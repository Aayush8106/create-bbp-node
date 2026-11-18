# Create BBP (Backend Boiler-Plate) Node

A CLI tool to quickly generate Node.js backend boilerplates using **JavaScript or TypeScript**, with support for **Normal and MVC architectures**, including Socket.IO integration.

## Features

- Choose between JavaScript and TypeScript.
- Choose between Normal and MVC architecture.
- Generate projects with or without Socket.IO.
- Automatically creates the required folder structure and files.
- Automatically installs the required dependencies.
- TypeScript configuration with strict type checking.
- Environment variable support using dotenv.
- Ready-to-use Express server.

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/)
- npm

### Create a Backend Project

Run the following command in your terminal:

```bash
npm create bbp-node
```

The CLI will ask you to select:

1. **Language**
   - JavaScript
   - TypeScript

2. **Architecture**
   - Normal
   - MVC

3. **Backend Option**
   - Normal Backend
   - Normal + Socket.IO
   - MVC Backend
   - MVC + Socket.IO

After selecting your options, the CLI automatically generates your backend project and installs its dependencies.

## Available Templates

| Language | Architecture | Socket.IO |
|---|---|---|
| JavaScript | Normal | No |
| JavaScript | Normal | Yes |
| JavaScript | MVC | No |
| JavaScript | MVC | Yes |
| TypeScript | Normal | No |
| TypeScript | Normal | Yes |
| TypeScript | MVC | No |
| TypeScript | MVC | Yes |

## Project Structures

### 1. Normal Backend

A simple Express backend with a single server file.

```text
project/
├── server.js
├── .env
└── package.json
```

For TypeScript:

```text
project/
├── src/
│   └── server.ts
├── compiled/
├── .env
├── package.json
└── tsconfig.json
```

### 2. Normal + Socket.IO

A simple Express backend with Socket.IO integration.

```text
project/
├── server.js
├── .env
└── package.json
```

For TypeScript:

```text
project/
├── src/
│   └── server.ts
├── compiled/
├── .env
├── package.json
└── tsconfig.json
```

### 3. MVC Backend

A structured backend following the Model-View-Controller architecture.

```text
project/
├── controllers/
│   └── index.js
├── routes/
│   └── index.js
├── models/
│   └── index.js
├── server.js
├── .env
└── package.json
```

For TypeScript:

```text
project/
├── src/
│   ├── controllers/
│   │   └── index.ts
│   ├── routes/
│   │   └── index.ts
│   ├── models/
│   │   └── index.ts
│   └── server.ts
├── compiled/
├── .env
├── package.json
└── tsconfig.json
```

### 4. MVC + Socket.IO

MVC architecture with Socket.IO integration and a separate socket handler.

```text
project/
├── controllers/
│   └── index.js
├── routes/
│   └── index.js
├── models/
│   └── index.js
├── socket/
│   └── index.js
├── server.js
├── .env
└── package.json
```

For TypeScript:

```text
project/
├── src/
│   ├── controllers/
│   │   └── index.ts
│   ├── routes/
│   │   └── index.ts
│   ├── models/
│   │   └── index.ts
│   ├── socket/
│   │   └── index.ts
│   └── server.ts
├── compiled/
├── .env
├── package.json
└── tsconfig.json
```

## Running the Project

After generating your backend, navigate to the generated project directory.

### JavaScript

Start the server:

```bash
npm start
```

### TypeScript

Run the development server with automatic restarting:

```bash
npm run dev
```

Build TypeScript into JavaScript:

```bash
npm run build
```

Run the compiled JavaScript:

```bash
npm start
```

## TypeScript Scripts

The generated TypeScript projects include:

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server using tsx watch |
| `npm run build` | Compiles TypeScript using tsc |
| `npm start` | Runs the compiled JavaScript server |

## Technologies Used

- Node.js
- Express.js
- JavaScript
- TypeScript
- Socket.IO
- dotenv
- npm

## Contributing

Contributions, suggestions, and improvements are welcome!

If you find a bug or have an idea for a new feature, contact me at:

**Email:** aayushp8106@gmail.com

## License

This project is licensed under the ISC License.

## Author

**Create BBP Node**

**GitHub:** https://github.com/Aayush8106/create-bbp-node

**npm:** https://www.npmjs.com/package/create-bbp-node