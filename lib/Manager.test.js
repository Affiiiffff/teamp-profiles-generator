const Manager = require("./Manager");

describe("Manager", () => {
  it("should create an object of manager correctly", () => {
    //Arrange
    const name = "Manager Name";
    const id = 1;
    const email = "test@example.com";
    const officeNumber = 123;
    // Act
    const obj = new Manager(name, id, email, officeNumber);
    // Assert
    expect(obj.getRole()).toBe("Manager");
    expect(obj.getName()).toBe(name);
    expect(obj.id).toBe(id);
  });
});
