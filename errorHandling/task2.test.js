
import axios from "axios";

async function getPostsWithParams() {
    return axios.get("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            "X-Custom-Header": "QA-Automation",
        },
        params: {
            userId: 1,
        },
    });
}

test("should send custom headers and params", async () => {
    const response = await getPostsWithParams();

    expect(response.status).toBe(200);
    expect(response.config.headers["X-Custom-Header"]).toBe("QA-Automation");
    expect(response.config.params.userId).toBe(1);
    expect(response.data.every(post => post.userId === 1)).toBe(true);
});