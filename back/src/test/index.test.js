const app = require("../app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/1");
      expect(response.status).toBe(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async () => {
      const response = await agent.get("/rickandmorty/1");
      expect(response.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          species: expect.any(String),
          gender: expect.any(String),
          image: expect.any(String),
        })
      );
    });

    it("Si hay un error responde con status: 500", async () => {
      const response = await agent.get("/rickandmorty/IDqueNoExiste");
      expect(response.status).toBe(500);
    });
  });
});
