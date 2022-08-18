const rndLanguage = require("../index");
describe("Test Random Language Functionalities & language existence", () => {
  test("should test random language functionality ", () => {
    expect(typeof rndLanguage()).toBe('string');
  });

  test("Check if a language exists", () => {
    expect(rndLanguage()).not.toContain('Go');
  });
});
