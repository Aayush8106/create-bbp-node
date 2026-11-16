# Create BBP Node

A Node.js CLI tool that helps developers quickly scaffold backend projects using **Normal** or **MVC architecture**.

Instead of manually creating folders and files, simply run the CLI command, choose your preferred architecture, and get a ready-to-use Node.js backend boilerplate.

## Features

- Quickly generate a Node.js backend project.
- Choose between Normal and MVC architecture.
- Automatically creates the required folders and files.
- Automatically generates `package.json`.
- Installs required dependencies automatically.
- Uses Express.js and dotenv.
- Simple interactive command-line interface.

## Installation and Usage

You don't need to install the package globally.

Run the following command in your terminal:

```bash
npm create bbp-node
```

Choose your preferred project structure from the interactive menu.

### 1. Normal Architecture

Select **Normal** to generate a simple backend structure.

Generated structure:

```text
project/
├── server.js
├── .env
└── package.json
```

### 2. MVC Architecture

Select **MVC** to generate a backend project following the Model-View-Controller architectural pattern.

Generated structure:

```text
project/
├── routes/
│   └── index.js
├── controllers/
│   └── index.js
├── models/
│   └── index.js
├── server.js
├── .env
└── package.json
```

## Running the Project

After the CLI finishes generating the project and installing dependencies, navigate to your generated project folder and run:

```bash
npm start
```

Your backend server will start on the configured port (default: 3000).

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm
- @inquirer/prompts
- dotenv

## Requirements

- Node.js installed
- npm installed

## Contributing

Contributions, suggestions, and bug reports are welcome!

If you find an issue or have an idea for improvement, feel free to open an issue or submit a pull request.

## Author

**Aayush Patel**

## License

ISC