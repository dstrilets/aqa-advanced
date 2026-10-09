async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await response.json();
    return todo;
}

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    return user;
}

async function runPromises() {
    try {
        const allPromises = await Promise.all([
            getTodo(),
            getUser()
        ]);

        console.log("Promise.all:", allPromises);

        const racePromises = await Promise.race([
            getTodo(),
            getUser()
        ]);

        console.log("Promise.race:", racePromises);
    } catch (error) {
        console.log("Error:", error);
    }
}

runPromises();