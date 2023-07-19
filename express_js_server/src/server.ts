


import express, {Express} from 'express';

const hostName = 'localhost';
const app = express();
const portNumber = 5000;

app.get('/', (req : express.Request, res : express.Response) => {
    res.status(200);
    res.send('<h1>Welcome to Express Server Get Method!</h1>'); // send is used for html response
})

app.post('/create', (req : express.Request, res : express.Response) => {
    res.status(200);
    res.send('<h1>Welcome to Express Server Post Method!</h1>'); // send is used for html response
})

app.put('/update', (req : express.Request, res : express.Response) => {
    res.status(200);
    res.send('<h1>Welcome to Express Server Put Method!</h1>'); // send is used for html response
})
app.delete('/delete', (req : express.Request, res : express.Response) => {
    res.status(200);
    res.send('<h1>Welcome to Express Server Delete Method!</h1>'); // send is used for html response
})

app.listen(portNumber, hostName, () => {
    console.log(`Welcome to express server...`);
    console.log(`https://${hostName}:${portNumber}`);
})

