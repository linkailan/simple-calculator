# simple-calculator

REST API calculator using Node.js with TypeScript

Visio Studio Code - Open Workspace from File...

Open a terminal window: CTRL + `

Enter the command in the terminal: npm start

Test the calculator using Postman:
POST http://localhost:3000/calculator

Body in JSON format e.g.:
{
    "num1": 1,
    "operator": "*",
    "num2": 2
}

Added Unit Testing
1. Install jest and ts-jest: npm install --save-dev jest ts-jest @types/jest

2. Update package.json
{
  "scripts": {
    "test": "jest"
  }
}

3. Generate jest.config.js file: npx ts-jest config:init
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

4. Create test folder for all test cases

5. Open tsconfig.json, in exclude section add test folder
"exclude": [
   "node_modules",
   "public_html",
   "test",
]

6. Create and write unit test cases in the test folder for each operation (addition, subtraction, multiplication and divition)

7. Run test case use the command: npm run test