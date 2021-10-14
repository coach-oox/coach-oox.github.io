---
layout: post
title: "타입스크립트 기초 토막 정리 #2 클래스"
categories: [typescript]
tags: [typescript]
comments: true
---

## 자바스크립트의 클래스

자바스크립트에서는 클래스가 가지고 있는 속성들에 대해 신경 쓸 필요가 별로 없다. 그냥 사용할 클래스 내용을 작성하기만 하면 된다. 자바스크립트에서 인터페이스가 필요할 때 (쓰고 싶을 때)는 클래스를 대신 사용할 수 있다.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}
```

## 타입스크립트의 클래스

```ts
class Human {
  private name: string;
  private age: number;
  private gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greeting() {
    console.log(this.name, this.age, this.gender);
  }
}

const jack = new Human("Jack", 30, "Female");
jack.greeting();
```

하지만 타입스크립트에서는 클래스가 어떤 속성을 가지는지, 그 속성이 어떤 권한을 가지는지를 명시해야 한다.
