import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios');
    response.json([
        'vinicius',
        'rosa',
        'luana'
    ]);
});

app.listen(3333, () => {
    console.log('app run')
})