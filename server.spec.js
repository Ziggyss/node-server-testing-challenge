const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  describe("index route", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;
      let response;
      const res = await request(server)
            .get("/");
        response = res;
        expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object fron the index route", async () => {
      const expectedBody = { api: "miaow" };

      const response = await request(server).get("/");

      expect(response.body).toEqual(expectedBody);
    });

    it("should return a JSON object fron the index route", async () => {
      const response = await request(server).get("/");

      expect(response.type).toEqual("application/json");
    });
  });
});

// describe('server', () => {
//   describe('[GET] / endpoint', () => {
//     test('the db env is testing', () => {
//       expect(process.env.DB_ENV).toBe('testing')
//     })

//     test('should return 200 OK', async () => {
//       const response = await request(server).get('/')
//       expect(response.status).toBe(200)
//     })

//     test('should return 200 OK with ES6 promise', () => {
//       return request(server).get('/')
//         .then(response => {
//           expect(response.status).toBe(200)
//         })
//     })

//     test('with supertest syntax', () => {
//       return request(server).get('/')
//         .expect(200)
//         .expect({ api: 'up' })
//         .expect('Content-Length', "12")
//         .expect('Content-Type', /json/)
//     })

//     test('returns the right response body', async () => {
//       const response = await request(server).get('/')
//       expect(response.body).toEqual({ api: 'up' });
//     })
//   })
// })

