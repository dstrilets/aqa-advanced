
import axios from "axios";
import assert from "node:assert/strict";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

async function runTests() {
    // Test 1: GET all posts
    const posts = await api.get("/posts");
    assert.equal(posts.status, 200);
    assert.equal(posts.data.length, 100);
    console.log("Test 1 passed: GET posts");

    // Test 2: GET post by ID
    const post = await api.get("/posts/1");
    assert.equal(post.status, 200);
    assert.equal(post.data.id, 1);
    assert.equal(typeof post.data.title, "string");
    console.log("Test 2 passed: GET post by ID");

    // Test 3: GET user by ID
    const user = await api.get("/users/1");
    assert.equal(user.status, 200);
    assert.equal(user.data.id, 1);
    assert.ok(user.data.email.includes("@"));
    console.log("Test 3 passed: GET user");

    // Test 4: POST create post
    const newPost = {
        title: "My test post",
        body: "Created with Axios",
        userId: 1,
    };

    const createdPost = await api.post("/posts", newPost);
    assert.equal(createdPost.status, 201);
    assert.equal(createdPost.data.title, newPost.title);
    assert.equal(createdPost.data.body, newPost.body);
    assert.equal(createdPost.data.userId, newPost.userId);
    console.log("Test 4 passed: POST create post");

    // Test 5: GET comments for post
    const comments = await api.get("/posts/1/comments");
    assert.equal(comments.status, 200);
    assert.ok(comments.data.length > 0);
    assert.ok(comments.data.every(comment => comment.postId === 1));
    console.log("Test 5 passed: GET comments");

    console.log("All 5 tests passed!");
}

runTests().catch(error => {
    console.error("Test failed:", error);
    process.exitCode = 1;
});
