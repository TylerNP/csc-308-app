import express from 'express';

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

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World!");
});

const findUsersByName = ((searchName) => {
    return users["users_list"].filter(
        (user) => user["name"] === searchName
    ); 
});

app.get('/users', (req, res) => {
    const searchName = req.query.name;
    if (searchName == undefined) {
        res.send(users);
    } else {
        // Find users
        let names = findUsersByName(searchName);
        names = { user_list : names };
        res.send(names);
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

const findUsersByNameAndJob = (name, job) => {
    let matches = users.users_list.filter((user) => user.name === name);
    return matches.filter((user) => user.job === job);
}

app.get('/user/search', (req, res) => {
    console.log(req.query)
    const name = req.query.name;
    const job = req.query.job;
    const result = findUsersByNameAndJob(name,job);
    res.status(200).send(result);
});

const addUser = (user) => {
    users.users_list.push(user);
    return user;
};

app.post('/users', (req, res) => {
    const userToAdd = req.body;
    addUser(userToAdd);
    res.send();
});

const deleteUser = (id) => {
    const match = users.users_list.indexOf(id);
    users.users_list = users.users_list.filter(
        (user) => user.id !== id
    );
    return match;
}

app.delete('/users/:id', (req, res) => {
    let found = deleteUser(req.params.id);
    if (found === -1) {
        res.status('410');
    } else {
        res.status('200');
    }
});

app.listen(port, () => {
    console.log(
        `Example app listening at http://localhost:${port}`
    );
});
