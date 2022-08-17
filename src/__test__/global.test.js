const devName = "Alvison Hunter works at CodeCrafters Labs";
const cclDevelopers = ['Alex Ruiz','Jean Cairoli','Patrick Cairoli','Jorge Cruz'];
const numWorkers = 6;
const boolValue = 5 > 4;

// Testing a simple text
test('should contain a text ', () => {
  expect(devName).toMatch(/CodeCrafters Labs/); 
});

// testing an array element value
test('should contain the name Alex Ruiz ', () => {
    expect(cclDevelopers).toContain('Alex Ruiz'); 
  });

// Testing numbers
test('Number of Workers greater than 5?', () => {
    expect(numWorkers).toBeGreaterThan(5); 
  });

  // to ensure a value is true in a boolean context.
  test('5 should be greater than 4', () => {
    expect(boolValue).toBeTruthy(); 
  });