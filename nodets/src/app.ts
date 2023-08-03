import express from 'express';
import bodyParser from 'body-parser';
import {add} from './add';
import {subtract} from './subtract';
import {multiply} from './mutiply';
import {divide} from './divide';

const app = express();
const port = 3000;

// Parse incoming request bodies in JSON format
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to the REST API Calculator! <br/>"
    + "Use Postman to test the API: <br/>"
    + "POST http://localhost:3000/calculator"
    )
  });

app.post('/calculator', (req, res) => {

    const {num1, operator, num2 } = req.body; // Access the parsed data from the request body
     // Process the data and send a response
     
    let result: number;

    if( isNaN(num1) || isNaN(num2) ){
        return res.status(400).json({ error: 'Invalid input. Both numbers should be valid.' });
    }


    switch (operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2)
            break;
        case '/':
            if(num2 == 0){
                return res.status(400).json({ error: 'Cannot divide by zero'});
            }
            result = divide(num1, num2);
            break;
        default:
            return res.status(400).json({error: 'Invalid operator'});
    }

    res.json({ result });


});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
