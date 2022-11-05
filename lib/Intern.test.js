const Intern = require("./Intern");

describe("Intern", () => {
  it("should create an object of Intern correctly", () => {
    //Arrange
    const name = "Intern Name";
    const id = 1;
    const email = "test@example.com";
    const officeNumber = 123;
    // Act
    const obj = new Intern(name, id, email, officeNumber);
    // Assert
    expect(obj.getRole()).toBe("Intern");
    expect(obj.getName()).toBe(name);
    expect(obj.id).toBe(id);
  });
});
