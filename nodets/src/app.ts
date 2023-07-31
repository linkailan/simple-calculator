import express from 'express';
import bodyParser from 'body-parser';
import { addition } from './addition';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to the REST API Calculator! <br/>"
    + "Use Postman to test the API: <br/>"
    + "POST http://localhost:3000/calculator"
    )
  });

app.post('/calculator', (req, res) => {

    const {num1, operator, num2 } = req.body;
    let result: number;

    if( isNaN(num1) || isNaN(num2) ){
        return res.status(400).json({ error: 'Invalid input. Both numbers should be valid.' });
    }

    switch (operator){
        case '+':
            result = addition(num1, num2);
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 == 0){
                return res.status(400).json({ error: 'Cannot divide by zero'});
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({error: 'Invalid operator'});
    }

    res.json({ result });

});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
