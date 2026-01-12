/**
 * Задача 7: Поиск гласных букв в строке
 *
 * Напиши функцию, которая подсчитывает количество гласных букв в строке.
 *
 * Гласные буквы: a, e, i, o, u (для английского языка)
 *
 * Пример:
 *   countVowels("hello") -> 2
 *   countVowels("xyz") -> 0
 *   countVowels("aeiou") -> 5
 */

import { describe, it, expect } from "vitest";

// ===== ТВОЙ КОД ЗДЕСЬ =====

function countVowels(str: string): number {
  // TODO: напиши реализацию
  return 0;
}

// ===========================

describe("countVowels", () => {
  it("должна посчитать гласные в слове hello", () => {
    expect(countVowels("hello")).toBe(2);
  });

  it("должна вернуть 0 если гласных нет", () => {
    expect(countVowels("xyz")).toBe(0);
  });

  it("должна посчитать все гласные", () => {
    expect(countVowels("aeiou")).toBe(5);
  });

  it("должна работать с пустой строкой", () => {
    expect(countVowels("")).toBe(0);
  });

  it("должна работать с заглавными буквами", () => {
    expect(countVowels("HELLO")).toBe(2);
  });
});
