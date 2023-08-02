"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const add_1 = require("./add");
const subtract_1 = require("./subtract");
const mutiply_1 = require("./mutiply");
const divide_1 = require("./divide");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send("Welcome to the REST API Calculator! <br/>"
        + "Use Postman to test the API: <br/>"
        + "POST http://localhost:3000/calculator");
});
app.post('/calculator', (req, res) => {
    const { num1, operator, num2 } = req.body;
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Both numbers should be valid.' });
    }
    switch (operator) {
        case '+':
            result = (0, add_1.add)(num1, num2);
            break;
        case '-':
            result = (0, subtract_1.subtract)(num1, num2);
            break;
        case '*':
            result = (0, mutiply_1.multiply)(num1, num2);
            break;
        case '/':
            if (num2 == 0) {
                return res.status(400).json({ error: 'Cannot divide by zero' });
            }
            result = (0, divide_1.divide)(num1, num2);
            break;
        default:
            return res.status(400).json({ error: 'Invalid operator' });
    }
    res.json({ result });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
