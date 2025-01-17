import express from 'express';
import cors from "cors";

const app = express();
const port = 8000;
const users = {
    users_list: [
        {
            id: "xyz789",
            name: "Charlie",
            job: "Janitor"
        },
        {
            id: "abc123",
            name: "Mac",
            job: "Bouncer"
        },
        {
            id: "ppp222",
            name: "Mac",
            job: "Professor"
        },
        {
            id: "yat999",
            name: "Dee",
            job: "Aspring actress"
        },
        {
            id: "zap555",
            name: "Dennis",
            job: "Bartender"
        }
    ]
};

app.use(cors());

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World!");
});

const findUsersByName = ((searchName) => {
    return users["users_list"].filter(
        (user) => user["name"] === searchName
    ); 
});

const findUsersByNameAndJob = (name, job) => {
    return users.users_list.filter(
        (user) => user.name === name && user.job === job
    );
}

app.get('/users', (req, res) => {
    const searchName = req.query.name;
    const job = req.query.job;
    if (searchName !== undefined && job !== undefined) {
        const result = findUsersByNameAndJob(searchName,job);
        res.status(200).send(result);
    } else if (searchName !== undefined) {
        // Find users
        let names = findUsersByName(searchName);
        names = { user_list : names };
        res.status(200).send(names);
    } else {
        res.send(users);
    }
});

const findUsersById = (id) => 
    users.users_list.find((user) => user.id === id);

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    let result = findUsersById(id);
    if (result == undefined) {
        res.status(404).send('Resource Not Found');
    } else {
        res.status(200).send(result);
    }
});

const addUser = (user) => {
    user["id"] = Math.trunc(Math.random()*100);
    users.users_list.push(user);
    return user;
};

app.post('/users', (req, res) => {
    const userToAdd = req.body;
    const addedUser = addUser(userToAdd);
    res.status(201).send(addedUser);
});

const deleteUser = (id) => {
    const oldLength = users.users_list.length;
    users.users_list = users.users_list.filter(
        (user) => user.id !== id
    );

    return (users.users_list).length < oldLength;
}

app.delete('/users/:id', (req, res) => {
    let found = deleteUser(req.params.id);
    if (found === false) {
        res.status(404).send();
    } else {
        res.status(204).send();
    }
});

app.listen(port, () => {
    console.log(
        `Example app listening at http://localhost:${port}`
    );
});
