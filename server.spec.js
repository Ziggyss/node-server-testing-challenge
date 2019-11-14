const request = require("supertest");
const server = require("./server");
const Cats = require("./catsModel");
const db = require("./data/db-config");

describe("server", () => {
  describe("[GET] / endpoint", () => {
    test("the db env is testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });

    test("should return 200 OK", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
    });

    test("should return 200 OK with ES6 promise", () => {
      return request(server)
        .get("/")
        .then(response => {
          expect(response.status).toBe(200);
        });
    });

    test("with supertest syntax", () => {
      return request(server)
        .get("/")
        .expect(200)
        .expect({ api: "miaow" })
        .expect("Content-Type", /json/);
    });

    test("returns the right response body", async () => {
      const response = await request(server).get("/");
      expect(response.body).toEqual({ api: "miaow" });
    });
  });
});

describe("GET /cats endpoint", () => {
  test("returns cats", () => {
    return request(server)
      .get("/cats")
      .expect(200)
      .expect([
        { id: 1, name: "Ziggy", hobby: "eating flies" },
        { id: 2, name: "Abi", hobby: "breaking computers" },
        { id: 3, name: "Zuri", hobby: "pirating" },
        { id: 4, name: "Pusskins", hobby: "decapitating rabbits" }
      ]);
  });
});

describe("catsModel", () => {
  describe("insert function", () => {
    test("inserts cat", () => {
      return Cats.insert({ name: "newCat", hobby: "newHobby" });
    });
  });
});

describe("catsModel", () => {
  describe("findById function", () => {
    test("returns the first cat", () => {
      return request(server)
        .get("/cats/1")
        .expect(200)
        .expect({ id: 1, name: "Ziggy", hobby: "eating flies" });
    });
  });
});

describe("DELETE /cats/5 endpoint", () => {
  describe("deletes a cat", () => {
    test("returns success message", () => {
      return request(server)
        .delete("/cats/5")
        .expect(200)
        .expect({
          message: "Cat deleted successfully"
        });
    });
  });
});
