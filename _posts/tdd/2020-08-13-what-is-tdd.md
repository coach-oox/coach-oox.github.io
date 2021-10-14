---
layout: post
title: "테스트 주도 개발 (TDD)이란?"
category: [tdd]
tags: [tdd, javascript, jest, mocha, sholud, supertest]
comments: true
---

테스트 주도 개발 (Test Driven Development, TDD)이란, 개발시 작은 단위로 테스트 코드를 먼저 작성하고, 해당 테스트를 통과하는 코드를 추가하는 과정을 반복해서 프로그램을 개발하는 소프트웨어 방법론을 말한다.

학습의 단계를 넘어, 실무 프로젝트에서 TDD를 적용하는 경우, 아무래도 테스트 코드를 작성하고 → 테스트하고 → 통과하면 코드를 추가하는 등 일련의 과정 때문에 더 많은 시간이 소요되는 것은 사실이다. 하지만 프로젝트의 규모가 크고 복잡할 수록 안정성, 유지보수 등 종합적 (최종적)으로 놓고 봤을 때는 더 높은 효율을 기대할 수 있다.

Node 환경을 기준으로 유닛 테스트에 가장 많이 사용되는 테스트 모듈은 [Jest](https://jestjs.io/), [SuperTest](https://www.npmjs.com/package/supertest)이며 [Mocha](https://mochajs.org/), [Sholud](https://shouldjs.github.io/) (Jest 이전에는 이게 바이블) 등을 사용할 수도 있다. (참고하면 좋은 글 : [Mocha vs. Jest: comparison of two testing tools for Node.js](https://www.merixstudio.com/blog/mocha-vs-jest/))

#### mocha.test.js

```js
it("Age should be between 12 and 20", () => {
  person.age = 16;
  expect(person.age).to.be.lte(20).and.to.be.gte(12);
});
```

#### jest.spec.js

```js
it("Age should be between 12 and 20", () => {
  person.age = 16;
  expect(person.age).toBeGreaterThanOrEqual(12);
  expect(person.age).toBeLessThanOrEqual(20);
});
```
