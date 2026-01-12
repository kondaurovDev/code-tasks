/**
 * Задача 8: Обращение строки
 *
 * Напиши функцию, которая принимает строку и возвращает её в обратном порядке.
 *
 * Пример:
 *   reverseString("hello") -> "olleh"
 *   reverseString("abc") -> "cba"
 */

import { describe, it, expect } from "vitest";

// ===== ТВОЙ КОД ЗДЕСЬ =====

function reverseString(str: string): string {
  // TODO: напиши реализацию
  return "";
}

// ===========================

describe("reverseString", () => {
  it("должна перевернуть строку hello", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("должна перевернуть строку abc", () => {
    expect(reverseString("abc")).toBe("cba");
  });

  it("должна вернуть пустую строку для пустой строки", () => {
    expect(reverseString("")).toBe("");
  });

  it("должна вернуть тот же символ для одного символа", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("должна работать с пробелами", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });
});
