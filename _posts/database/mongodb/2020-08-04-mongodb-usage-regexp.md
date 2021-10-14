---
layout: post
title: "MongoDB 정규식 표현을 사용하는 방법"
category: [database, mongodb, regexp]
tags: [database, nosql, mongodb, regexp, express]
comments: true
---

```javascript
export async function search(request, response) {
  const { keyword } = request.query;
  let posts = [];

  if (keyword) {
    posts = await Post.find({
      title: {
        // $regex: `.*${keyword}.*`, $options: "i"
        $regex: new RegExp(keyword, "i"),
      },
    });
  }

  return response.render("search");
}
```

MongoDB에서 (위 예제는 Express) 정규식을 사용하기 위해서는 `$regex`라는 정규식 연산자를 사용한다. 옵션인 `i`는 대소문자를 구별하지 않는다는 의미이며, 위 예제에서는 그냥 `keyword`를 포함하는 (대소문자 구별없이) 제목을 필터링한다.

- [MongoDB Manual - $regex](https://docs.mongodb.com/manual/reference/operator/query/regex/)
- [MongoDB Manula - Query Operators](https://docs.mongodb.com/manual/reference/operator/query/)
