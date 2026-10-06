function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json());
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json());
}

getTodo()
    .then(todo => console.log("Todo:", todo))
    .catch(error => console.log("Todo error:", error));

getUser()
    .then(user => console.log("User:", user))
    .catch(error => console.log("User error:", error));

const allPromises = Promise.all([
    getTodo(),
    getUser()
]);

allPromises
    .then(result => console.log("Promise.all:", result))
    .catch(error => console.log("Promise.all error:", error));

const racePromises = Promise.race([
    getTodo(),
    getUser()
]);

racePromises
    .then(result => console.log("Promise.race:", result))
    .catch(error => console.log("Promise.race error:", error));