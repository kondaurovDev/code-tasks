// ===========================================
// Проблемы с this в JavaScript/TypeScript
// ===========================================

// 1. Потеря контекста при передаче метода как callback
// ----------------------------------------------------

class Counter {
  count = 0;

  increment() {
    this.count++;
    console.log(this.count);
  }
}

const counter = new Counter();

counter.increment(); // 1 - работает

setTimeout(counter.increment, 100); // undefined или ошибка - this потерян

setTimeout(() => counter.increment(), 100); // 2 - работает, стрелочная функция захватывает this

// 2. this зависит от способа вызова, а не от места определения
// ------------------------------------------------------------

const obj = {
  name: 'Alice',
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

obj.greet(); // "Hello, Alice"

const greet = obj.greet;
greet(); // "Hello, undefined" - this теперь window/global

const other = { name: 'Bob', greet: obj.greet };
other.greet(); // "Hello, Bob" - this теперь other

// 3. Проблема с вложенными функциями
// ----------------------------------

class UserService {
  users = ['Alice', 'Bob'];

  // Проблема
  printUsersBad() {
    this.users.forEach(function (user) {
      // @ts-expect-error - this = undefined в strict mode
      console.log(this.users.length); // Ошибка! this = undefined
    });
  }

  // Решение со стрелочной функцией
  printUsersGood() {
    this.users.forEach((user) => {
      console.log(this.users.length); // Работает! this захвачен лексически
    });
  }
}

// 4. Почему стрелочные функции не имеют своего this
// -------------------------------------------------
// Стрелочные функции ЛЕКСИЧЕСКИ захватывают this из окружающего контекста

class Button {
  label = 'Click me';

  // Обычная функция - свой this
  handleClickBad() {
    document.addEventListener('click', function () {
      // @ts-expect-error - this = document, не Button
      console.log(this.label); // undefined - this = document
    });
  }

  // Стрелочная функция - захватывает this из метода handleClickGood
  handleClickGood() {
    document.addEventListener('click', () => {
      console.log(this.label); // "Click me" - this = Button instance
    });
  }
}

// 5. Рекомендуемый подход: избегать this вообще
// ---------------------------------------------

// Плохо - класс с this, мутабельное состояние
class CalculatorBad {
  result = 0;

  add(n: number) {
    this.result += n;
    return this;
  }
}

// Хорошо - чистые функции без this
interface Calculator {
  result: number;
}

function createCalculator(): Calculator {
  return { result: 0 };
}

function add(calc: Calculator, n: number): Calculator {
  return { result: calc.result + n };
}

const calc = createCalculator();
const calc2 = add(calc, 5); // { result: 5 }

// ===========================================
// Итог
// ===========================================
//
// | Проблема              | Причина                                    |
// |-----------------------|--------------------------------------------|
// | Непредсказуемость     | this определяется в момент вызова          |
// | Потеря контекста      | При передаче метода как callback           |
// | Вложенные функции     | Каждая обычная функция имеет свой this     |
// | Сложность отладки     | Ошибки проявляются только в runtime        |
//
// Стрелочные функции решают часть проблем (захватывают this лексически),
// но лучший подход — писать функциональный код без this вообще.
