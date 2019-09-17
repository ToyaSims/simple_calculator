describe("test_function()", function test_function() {
  //tests for add function
  it("add() should add 2 numbers,return 0", function() {
    let result;
    result = add(0, 0);
    expect(result).toBe(0);
  });

  it("add() should add 2 negetive numbers", function() {
    let result;
    result = add(-1, -1);
    expect(result).toBe(-2);
  });

  it("add() should add 2 numbers", function() {
    let result;
    result = add(4, 5);
    expect(result).toBe(9);
  });

  //tests for addAll function
  it("addAll() should add all numbers entered", function() {
    let result;
    result = addAll(1, 2, 3, 4);
    expect(result).toBe(10);
  });

  //tests for multiply function
  it("multiply() should multiply 2 numbers", function() {
    let result;
    result = multiply(1, 2);
    expect(result).toBe(2);
  });

  it("multiplyAll() should multiply all numbers entered", function() {
    let result;
    result = multiplyAll(1, 2, 3, 4);
    expect(result).toBe(24);
  });
});
