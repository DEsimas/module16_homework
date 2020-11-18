import { match } from "../index.js";

describe("test match funck", () => {
    it("hello hello", () =>{
        expect(match("hello", "hello")).toBe(true);
    }),
    it("hELlo HellO", () =>{
        expect(match("hELlo", "HellO")).toBe(true);
    }),
    it("HELLO HELLO", () =>{
        expect(match("HELLO", "HELLO")).toBe(true);
    }),
    it("hello bye", () =>{
        expect(match("hello", "bye")).toBe(false);
    });
});