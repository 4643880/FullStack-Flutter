import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const portName = process.env.PORT || 3000;

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            jokeTitle: "Why don't scientists trust atoms?",
            jokeContent: "Because they make up everything!"
        },
        {
            id: 2,
            jokeTitle: "What do you get when you cross a snowman and a vampire?",
            jokeContent: "Frostbite!"
        },
        {
            id: 3,
            jokeTitle: "Did you hear about the mathematician who's afraid of negative numbers?",
            jokeContent: "He'll stop at nothing to avoid them!"
        },
        {
            id: 4,
            jokeTitle: "What do you call a fake noodle?",
            jokeContent: "An impasta!"
        },
        {
            id: 5,
            jokeTitle: "Why did the scarecrow win an award?",
            jokeContent: "Because he was outstanding in his field!"
        }
    ];
    res.json(jokes);
});




app.listen(portName, () => {
    console.log(`http://localhost:${portName}`)
});