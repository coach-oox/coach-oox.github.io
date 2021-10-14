---
layout: post
title: "Mongoose 새로운 문서를 생성 및 저장한 다음에 Populate 하는 방법"
category: [node, express, mongodb]
tags: [node, express, mongodb, mongoose]
comments: true
---

```js
newComment.populate("owner");
```

이런 모습의 구문을 질문으로 받는 경우, 열에 아홉은 `populate()`가 (일반적으로 `find()` 등을 실행할 때 뒤에 붙이는 경우와는 달리) 실행되지 않았기 때문에 발생하는 문제이다. 근데 최근 이와 관련된 수업을 원격으로 진행하는데, 어떤 사람은 된다 그러고 어떤 사람은 안된다 그래서 굉장히 애를 먹었던 경험이 있다. 진도를 나가야해서 답변을 미루고 수업이 끝난 뒤 찾아보니 버전 차이에서 생기는 문제였다.

## Mongoose 버전 6 이전

Mongoose 버전을 v6.0.5 이하 버전으로 사용하는 경우, `execPopulate()`를 사용해서 `populate()`를 실행시켜 주면 해결 된다. 예를 들면 다음과 같다.

```js
let newComment = await Comment.create({
  owner,
  video,
  content,
});

newComment.save();
await newComment.populate("owner").execPopulate();
```

하지만 Mongoose가 v6.0.5 업그레이드를 하면서 `execPopulate()`가 [삭제](https://mongoosejs.com/docs/migrating_to_6.html#removed-execpopulate)되었기 때문에 더이상 이 방법을 권장하지 않는다.

## Mongoose 버전 6 이후

공식 [문서](https://mongoosejs.com/docs/migrating_to_6.html#removed-execpopulate)에서는 이와 같은 경우 `await doc.populate('path1').populate('path2').execPopulate()` 대신에 `await doc.populate(['path1', 'path2']);`으로 변경하라고 안내하고 있다. 예를 들면 다음과 같다.

```js
await newComment.populate("owner");
```
