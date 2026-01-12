/**
 * Задача 2: Проверка палиндрома
 *
 * Напиши функцию, которая принимает строку и возвращает true,
 * если строка является палиндромом, и false в противном случае.
 *
 * Палиндром - это строка, которая читается одинаково слева направо и справа налево.
 *
 * Пример:
 *   isPalindrome("abba") -> true
 *   isPalindrome("hello") -> false
 *   isPalindrome("a") -> true
 */

import { describe, it, expect } from "vitest";

// ===== ТВОЙ КОД ЗДЕСЬ =====

function isPalindrome(str: string): boolean {
  // TODO: напиши реализацию
  return false;
}

// ===========================

describe("isPalindrome", () => {
  it("должна вернуть true для палиндрома", () => {
    expect(isPalindrome("abba")).toBe(true);
  });

  it("должна вернуть false для не-палиндрома", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("должна вернуть true для одного символа", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("должна вернуть true для пустой строки", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("должна работать с нечётной длиной", () => {
    expect(isPalindrome("aba")).toBe(true);
  });
});
