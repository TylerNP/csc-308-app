// src/MyApp.jsx
import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
}

function MyApp() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchUsers()
            .then((res) => res.json())
            .then((json) => setCharacters(json["users_list"]))
            .catch((error) => { console.log(error); });
    }, [] );

    function removeCharacterByIndex(index) {
        const promise = fetch(`http://localhost:8000/users/${characters[index]._id}`, {
                method: "DELETE",
            }
        );

        return promise;
    }

    function removeOneCharacter(index) {
        removeCharacterByIndex(index)
            .then((res) => {
                if (res.status == 204) {
                    const updated = characters.filter((_, i) => {
                        return i !== index;
                    });
                    setCharacters(updated);
                } else {
                    throw new Error("No Resources Found");
                }
            })
            .catch((error) => { console.log(error); });
        
    }

    function postUser(person) {
        const promise = fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
        });

        return promise;
    }

    function updateList(person) {
        postUser(person)
            .then((res) => {
                if (res.status == 201) {
                    return res.json();
                } else {
                    throw new Error("No content added");
                }
            })
            .then((json) => {
                setCharacters([...characters,json]);
            })
            .catch((error) => { console.log(error); });
    }

    return(
        <div className="container">
            <Table 
                characterData={characters} 
                removeCharacter={removeOneCharacter}
            />
            <Form handleSubmit={updateList} />
        </div>
    );
}
export default MyApp;