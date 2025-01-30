import express from 'express';
import cors from "cors";
import user_services from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/users', (req, res) => {
    const searchName = req.query.name;
    const job = req.query.job;
    user_services.getUsers(searchName, job)
    .then((result) => {
        res.status(200).send({users_list: result});
    })
    .catch((err) => {
        console.log(err);
        res.status(502).send();
    });
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    user_services.findUserById(id)
        .then((result) => {
            if (result == []) {
                res.status(404).send('Resource Not Found');
            } else {
                res.status(200).send(result);
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(502).send()
        });
});

app.post('/users', (req, res) => {
    const userToAdd = req.body;
    user_services.addUser(userToAdd)
        .then((result) => {
            res.status(201).send(result);
        })
        .catch((err) => {
            console.log(err)
            res.status(502).send(result);
    });
});

app.delete('/users/:id', (req, res) => {
    user_services.delelteUserById(req.params.id)
        .then((result) => {
            if (result == null) {
                res.status(404).send();
            } else {
                res.status(204).send();
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(502).send();
        });
});

app.listen(port, () => {
    console.log(
        `Example app listening at http://localhost:${port}`
    );
});
