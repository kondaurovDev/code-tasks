/**
 * Задача 10: Проверка на простое число
 *
 * Напиши функцию, которая определяет, является ли число простым.
 *
 * Простое число - это натуральное число больше 1, которое делится
 * только на 1 и на само себя.
 *
 * Пример:
 *   isPrime(7) -> true   (делится только на 1 и 7)
 *   isPrime(4) -> false  (делится на 1, 2 и 4)
 *   isPrime(1) -> false  (1 не является простым по определению)
 */

import { describe, it, expect } from "vitest";

// ===== ТВОЙ КОД ЗДЕСЬ =====

function isPrime(n: number): boolean {
  // TODO: напиши реализацию
  return false;
}

// ===========================

describe("isPrime", () => {
  it("должна вернуть true для простого числа 7", () => {
    expect(isPrime(7)).toBe(true);
  });

  it("должна вернуть false для составного числа 4", () => {
    expect(isPrime(4)).toBe(false);
  });

  it("должна вернуть false для 1", () => {
    expect(isPrime(1)).toBe(false);
  });

  it("должна вернуть true для 2", () => {
    expect(isPrime(2)).toBe(true);
  });

  it("должна вернуть false для 0", () => {
    expect(isPrime(0)).toBe(false);
  });

  it("должна вернуть false для отрицательного числа", () => {
    expect(isPrime(-5)).toBe(false);
  });

  it("должна вернуть true для 13", () => {
    expect(isPrime(13)).toBe(true);
  });
});
