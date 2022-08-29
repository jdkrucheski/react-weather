describe("Demo tests", () => {
  test("should  write Hello World", () => {
    const message = "Hello World";
    const newMessage = message.trim();
    expect(message).toBe(newMessage);
  });
});
