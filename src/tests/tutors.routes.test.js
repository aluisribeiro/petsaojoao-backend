import request from "supertest";
import server from "../server";

afterAll(() => {
  server.close();
});

describe("API POST Tutors", () => {
  test("/tutors", async () => {
    const response = await request(server).post("/tutors");
    expect(response.status).toEqual(200);
  });
});
