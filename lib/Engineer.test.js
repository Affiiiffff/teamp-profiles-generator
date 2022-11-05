const Engineer = require("./Engineer");

describe("Engineer", () => {
  it("should create an object of engineer correctly", () => {
    //Arrange
    const name = "Engineer Name";
    const id = 1;
    const email = "test@example.com";
    const officeNumber = 123;
    // Act
    const obj = new Engineer(name, id, email, officeNumber);
    // Assert
    expect(obj.getRole()).toBe("Engineer");
    expect(obj.getName()).toBe(name);
    expect(obj.id).toBe(id);
  });
});
