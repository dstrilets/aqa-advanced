
import axios from "axios";
import { jest } from "@jest/globals";

async function getUser() {
    try {
        const response = await axios.get("/users/1");
        return response.data;
    } catch (error) {
        return `Request failed: ${error.message}`;
    }
}

test("should return user on successful request", async () => {
    const getSpy = jest.spyOn(axios, "get").mockResolvedValueOnce({
        status: 200,
        data: { id: 1, name: "Dasha" },
    });

    try {
        const result = await getUser();

        expect(result).toEqual({ id: 1, name: "Dasha" });
        expect(getSpy).toHaveBeenCalledWith("/users/1");
    } finally {
        getSpy.mockRestore();
    }
});

test("should handle failed request", async () => {
    const getSpy = jest.spyOn(axios, "get").mockRejectedValueOnce(
        new Error("Server error")
    );

    try {
        const result = await getUser();

        expect(result).toBe("Request failed: Server error");
    } finally {
        getSpy.mockRestore();
    }
});