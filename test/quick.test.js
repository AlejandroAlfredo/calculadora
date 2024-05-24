import { expect, test } from "vitest";
import os from "os";

test("Prueba OS", () => {
  const myos = os.type().toLowerCase();
  if (myos.includes("windows")) {
    expect(myos.includes("windows")).toBe(true);
  } else {
    console.log("Your OS isn't windows!");
  }
});
