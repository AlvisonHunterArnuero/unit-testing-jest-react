const devName = "Alvison Hunter works at CodeCrafters Labs";
const fifaPlayers = [
  "Cristiano Ronaldo",
  "Leonel Messi",
  "Keylor Navas",
  "Mohammed Salah",
  "Neymar Junior",
];
const numWorkers = 6;
const boolValue = 5 > 4;

// Reverse strings function
const reverseString = (str, cb) => {
  cb(str.split("").reverse().join(""));
};

// Create a promise function
const reverseStringAsPromise = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error has ocurred"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

// Testing a simple text
test("should contain a text ", () => {
  expect(devName).toMatch(/CodeCrafters Labs/);
});

// testing an array element value
test("should contain the name Cristiano Ronaldo", () => {
  expect(fifaPlayers).toContain("Cristiano Ronaldo");
});

// Testing numbers
test("Number of Workers greater than 5?", () => {
  expect(numWorkers).toBeGreaterThan(5);
});

// to ensure a value is true in a boolean context.
test("5 should be greater than 4", () => {
  expect(boolValue).toBeTruthy();
});

// Test callbacks
test("The callback should return a reversed word", () => {
  reverseString("CodeCrafters Labs", (str) => {
    expect(str).toBe("sbaL sretfarCedoC");
  });
});

// Testing the promise
test("Testing a Promise", () => {
  return reverseStringAsPromise("CodeCrafters Labs").then((string) => {
    expect(string).toBe("sbaL sretfarCedoC");
  });
});

// Testing using async await
test("Testing applying Async Await", async () => {
  const strToBeReversed = await reverseStringAsPromise("CodeCrafters Labs");
  expect(strToBeReversed).toBe("sbaL sretfarCedoC");
});

beforeAll(() => {
  console.log("Starting a set of tests....");
});

afterAll(() => {
  console.log("All Tests have been executed.");
});
