const Employee = require('./employee');

test("can return new employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("can set name via constructor argument", () => {
    const name = "Bobby";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("can set id via constructor argument", () => {
    const testValue = 4;
    const e = new Employee("BonBon", testValue);
    expect(e.id).toBe(testValue);
})

test("can set email via constructor argument", () => {
    const testValue = 'some-email@gmail.com';
    const e = new Employee("BonBon", testValue);
    expect(e.email).toBe(testValue);
})