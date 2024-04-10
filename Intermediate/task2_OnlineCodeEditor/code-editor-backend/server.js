const express = require('express');
const app = express();
const port = 5000;
const { PythonShell } = require('python-shell');

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.post('/execute', (req, res) => {
    const { code ,language} = req.body;
    let output;

    try {
        if (language === 'javascript') {
            // Execute the code using eval
            output = eval(code);
            if (output === undefined) {
                output = 'Code execution completed successfully but returned undefined';
            }
        } else if (language === 'python') {
            // Execute Python code using python-shell
            PythonShell.runString(code, null, function (err, result) {
                if (err) {
                    throw err;
                }
                output = result.join('\n'); // Join the array of output lines into a single string
            });
        } 
        else {
            throw new Error('Unsupported Language');
        }
    } catch (error) {
        output = `Error executing code: ${error.message}`;
    }

    // Send back the output to the client
    res.send(output.toString());
    console.log(output)
});

app.get('/', (req, res) => {
    res.json('hello')
})

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
