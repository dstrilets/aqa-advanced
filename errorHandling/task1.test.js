
import axios from "axios";

async function getInvalidUrl() {
    try {
        await axios.get("https://jsonplaceholder.typicode.com/invalid-url");
    } catch (error) {
        if (error.response) {
            return `Request failed with status ${error.response.status}`;
        }
        return `Network error: ${error.message}`;
    }
}

test("should handle 404 error", async () => {
    const result = await getInvalidUrl();

    expect(result).toBe("Request failed with status 404");
});