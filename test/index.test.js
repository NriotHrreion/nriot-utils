const { NUtils } = require("../dist");

test("Get Random Number", () => {
    console.log(NUtils.getRandom(1, 1000));
});

test("Delete an Item from an Array", () => {
    var arr = [1, 2, 4, 7, 8, 8, 9, 10, 12];
    NUtils.arrayItemDelete(arr, 3);
    expect(arr).toStrictEqual([1, 2, 4, 8, 8, 9, 10, 12]);
});

test("Move an Item to the End of an Array", () => {
    var arr = [1, 2, 4, 7, 8, 8, 9, 10, 12];
    NUtils.arrayItemToLast(arr, 4);
    expect(arr).toStrictEqual([1, 2, 4, 7, 8, 9, 10, 12, 8]);
});

test("Check If 2 Objects are Equal", () => {
    expect(NUtils.isObjectEqual({a: 1, b: 2}, {a: 1, b: 2})).toBeTruthy();
    expect(NUtils.isObjectEqual({a: 1, b: 2}, {b: 2, a: 1})).toBeTruthy();
    expect(NUtils.isObjectEqual({a: 1, b: 2}, {a: 2, b: 2})).toBeFalsy();
    expect(NUtils.isObjectEqual({a: 1, b: 2}, {a: 2})).toBeFalsy();
    expect(NUtils.isObjectEqual({a: 1, b: {c: "Hello"}}, {a: 1, b: {c: "Hello"}})).toBeTruthy();
});

test("Sleep for a Given Time", async () => {
    await NUtils.sleep(1000);
    console.log("I have slept for 1 second!");
});
