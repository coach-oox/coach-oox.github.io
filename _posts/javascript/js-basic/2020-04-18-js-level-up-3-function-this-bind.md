---
layout: post
title: "자바스크립트 레벨업을 위한 주요 개념 #3 this"
category: [javascript, js-basic]
tags: [javascript, this]
comments: true
---

자바스크립트에서는 어떤 함수가 호출될 때 전달되는 아규먼트 말고도 `arguments`라는 객체와 `this`가 은밀하게 (?) 전달되고 있다. `this`는 아마도 Java를 배워본적 있는 사람이라면 꽤 낯이 익는 친구일 것이다. 하지만 이때 `this`는 Java의 `this`와는 개념적으로 다른데, Java에서는 자기 자신의 Reference를 가르키는 변수로써 사용되지만, 자바스크립트에서는 함수를 호출하는 방식에 따라 `this`에 바인딩되는 객체가 달라진다.

## 함수 호출 방식에 따른 this 바인딩

자바스크립트에서 Lexical Scope는 함수를 선언할 때 결정된다. 반면에 `this`는 함수의 선언부가 아닌 함수를 호출할 때 어떻게 호출하였는가에 따라 `this`에 바인딩되는 객체가 동적으로 결정된다. 함수를 호출하는 방식은 다음과 같이 크게 4가지로 구분할 수 있다.

- 일반적인 함수 호출
- 객체 메소드 호출
- 생성자 함수 호출
- `call` / `bind` / `apply` 호출

각각의 간단한 예시는 다음과 같다.

```javascript
function a() {};

// 일반적인 함수 호출
a();

// 객체 메소드 호출
const b { c: d };
b.c();

// 생성자 함수 호출
const e = new f();

// call / bind / apply 호출
const g = { h: i};
g.call(i);
g.bind(i)();
g.apply(i);
```

### 일반적인 경우

기본적으로 `this`는 전역 객체에 바인딩된다. 따라서 전역 함수는 물론이고 전역 함수의 내부 함수의 경우에도 `this`가 자신을 감싸고 있는 외부 함수가 아닌 전역 객체에 바인딩 되고 있다. (전역 객체는 브라우저 기준 `window` 객체를, 터미널에서는 `global` 등으로 표시한다.)

```javascript
function first() {
  console.log(`first function : ${this}`);

  function second() {
    console.log(`second function : ${this}`);
  }

  second();
}

first();
```

콜백 함수의 경우에도 `this`는 전역 객체에 바인딩 된다. 또한 내부 함수의 경우 일반적인 함수이든, 메소드이든, 콜백 함수이든지 동일하게 `this`가 전역 객체에 바인딩 된다. 일반적으로는 메소드의 내부 함수가 전역 객체를 바인딩하게끔 하지 않는다. 따라서 이 문제를 회피하기 위해서 메소드에서 `const that = this` 와 같이 객체를 가르키게 만들어 사용한다.

### 내부 함수에서 this의 문제점

위에서 언급한 바와 같이, 자바스크립트의 이러한 특징 때문에 (`this`가 동적으로 바인딩되는) 내부 함수에서 `this`를 쓸 때 외부 함수에서 쓰는 것과 동일시해서 생기는 문제들을 종종 볼 수 있다. 즉, 내부 함수에서 의도한대로 `this`를 사용하려면 그냥 사용하면 (?) 안된다.

```javascript
const number = {
  a: 100,
  b: 200,
  sum: function () {
    console.log(this === number);

    function calculate() {
      console.log(this === number);
      return this.a + this.b;
    }

    return calculate();
  },
};

console.log(number.sum());
```

위 코드 예시에서는 `number` 객체가 가지고 있는 `sum()` 함수를 실행하고 있다. 이때 `sum()` 함수의 `this`는 `number` 객체일 것이다. 또 `calculate()` 함수는 `sum()` 함수의 내부에 정의되어 있다. 그래서 아마도 저렇게 (?) 코딩한 경우에 프로그래머가 의도한 바는 `calculate()`의 `this`가 `number` 객체를 가르킨다는 가정하에 `number` 객체가 가지고 있는 `a`와 `b`를 더하고자 했을 것이다.

하지만 결과는 그렇지 않다. `calculate()` 내부의 `console.log()` 결과는 `false`이며, `a`와 `b`를 찾지 못해 `TypeError`가 발생한다. 이는 위에서 이야기한 것과 같이 내부 함수의 `this`는 전역 객체를 가르키고 있기 때문이다. 이때 아래와 같이 이러한 문제를 회피할 수 있다.

```javascript
const number = {
  a: 100,
  b: 200,
  sum: function () {
    const that = this;
    console.log(this === number);

    function calculate() {
      console.log(that === number);
      return that.a + that.b;
    }

    return calculate();
  },
};

console.log(number.sum());
```

### call(), bind(), apply()

자바스크립트에서 `this`를 동적으로 바인딩하는 (바인딩 될 객체를 결정하는) 것은 자바스크립트의 엔진이 결정하는 부분이다. 하지만 자바스크립트에서는 이러한 `this`의 바인딩을 명시적으로 지정할 수 있는 `call()`, `bind()`, `apply()` 함수도 제공한다. 이 함수들은 `Function.prototype` 객체에서 제공되며 각각의 사용 방법과 특성은 아래와 같다.

```javascript
const Hello = function (name) {
  this.name = "Hello, " + name;
};

const Name = {};

Hello.apply(Name, ["SignLoper"]);
console.log(Name);
```

`apply()` 함수는 `this`를 특정 객체에 바인딩하기 위해 사용된다. 이때 `apply()`는 함수를 호출할 뿐, 다른 기능은 하지 않는다. 그냥 명시적으로 바인딩만 결정해준다. 즉, 위 코드에서 `apply()` 함수는 생성자 함수인 `Hello()`를 호출하면서 `this`에 `Name` 객체를 바인딩한다.

```javascript
const Hello = function (name) {
  this.name = "Hello, " + name;
};

const Name = {};

Hello.call(Name, "SignLoper");
console.log(Name);
```

`call()` 함수는 기능적으로는 `apply()` 함수랑 똑같으며, 아규먼트의 형식에만 차이가 있다. `apply()`는 두 번째 아규먼트를 배열 형태로 넘기지만 (그래서 실제로 사용될 때 유사 배열이라던지 배열 함수와 함께 쓰일 때 주로 활용된다.) `call()` 함수는 그냥 나열해서 전달한다.

```javascript
const Hello = function (name) {
  this.name = "Hello, " + name;
};

Hello.prototype.merge = function (callBack) {
  if (typeof callBack === "function") {
    callBack.call(this);
  }
};

function Name() {
  console.log(this.name);
}

const greating = new Hello("SignLoper");
greating.merge(Name);
```

`apply()` 함수와 `call()` 함수는 위와 같이 콜백 함수의 `this`를 바인딩하기 위해서 사용되는 경우도 있다.

```javascript
const Name = { name: "SignLoper" };

const Hello = function () {
  console.log(`Hello, ${this.name}`);
};

const greating = Hello.bind(Name);
greating();
```

`apply()`와 `call()` 함수가 함수를 실행시키기만 한다면, `bind()`는 지정한 객체의 새로운 함수를 만들어주는 함수이다. 이때 새로운 함수라는 의미는 아예 Context 자체가 다른 자아가 (?) 다른 함수를 만든다는 의미이다. 위 코드에서 `Hello()` 함수는 `Name` 객체와 바인딩되어, `this.name`으로 `Name` 객체가 가지고 있는 값을 출력할 수 있다.
