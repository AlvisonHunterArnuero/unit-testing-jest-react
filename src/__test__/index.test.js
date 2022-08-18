const rndLanguage = require("../index");
describe("Test Rnd Language Functionalities", () => {
  test("should test random language functionality ", () => {
    expect(typeof rndLanguage()).toBe('string');
  });

  test("Check if a language exists", () => {
    expect(rndLanguage()).not.toContain('Go');
  });
});
