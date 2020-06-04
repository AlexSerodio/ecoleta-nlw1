import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'User 1',
        'User 2',
        'User 3'
    ]);
});

app.listen(3333);