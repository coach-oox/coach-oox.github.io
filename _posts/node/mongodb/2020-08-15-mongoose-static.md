---
layout: post
title: "Mongoose Static 메소드 생성 및 사용법"
category: [node, express, mongodb]
tags: [node, mongodb, express, mongoose]
comments: true
---

Static이란 `Model.create()`, `Model.save()`와 같이 접근하여 사용할 수 있는 사용자 정의 함수를 말한다. (참고 : [Methods and Statics](https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html)) 모델의 객체 인스턴스가 살아있을 때만 호출 할 수 있는 Method와는 달리, 객체를 생성하지 않아도 바로 컬렉션에 있는 데이터에 접근할 수 있기 때문에 데이터 조회와 관련된 API를 만들 때 사용된다.

```javascript
userSchema.statics.findUser = async function (id: string) {
  return this.findOne({ id: id });
};
```

스키마 (모델)를 구현한 부분에 정의한다.

```javascript
const user = User.findUser(id);
```

사용할 때는 Static 이므로 import 할 필요가 없다.
