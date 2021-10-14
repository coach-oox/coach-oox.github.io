---
layout: post
title: "Node Multer를 사용해서 백엔드로 파일 전송하기"
category: [node]
tags: [node, express, multer]
comments: true
---

## 클라이언트측에서 전송하는 데이터

사용자 (클라이언트)가 앱 (서버)에 전송하는 정보는 크게 텍스트와 파일로 구분할 수 있다. 텍스트는 `request.body`를 통해 전달되며, `express.urlencoded({ extended: true }`를 사용해 파싱한다.

```bash
npm install multer
```

하지만 Express는 사용자가 업로드한 파일을 받아서 저장하는 기능을 기본으로 제공하지 않기 때문에, 파일을 전달받을 때는 `multer` 라이브러리를 활용한다.

## 사용법 예시

```javascript
import multer from "multer";

export const uploadVideo = multer({ dest: "uploads/" });
```

`multer`를 정의한다. `dset` 옵션에는 전달받은 파일을 저장할 경로를 지정한다. 또한 `limit` 옵션을 사용하면 `fileSize`를 제한할 수 있다.

- `dest` : 파일이 저장될 위치
- `fileFilter` : 어떤 파일을 허용할지 제어하는 함수
- `limits` : 업로드 된 데이터의 한도
- `preservePath` : 파일의 base name 대신 보존할 파일의 전체 경로
- [기타 옵션 사용법](https://github.com/expressjs/multer/blob/master/doc/README-ko.md#multeropts)

```javascript
videoRouter.route("/upload").post(uploadVideo.single("file"), postUpload);
```

다음으로는 사용할 위치 (라우터)에서 `multer` 미들웨어를 추가해준다. (**참고** : [Multer Guide](https://github.com/expressjs/multer)) `single()` 메소드에 인자로 전달되는 `file`은 **클라이언트 측에서 전송할 파일의 `name`으로 정의 되어야 한다.** 만약 텍스트 전용 `multipart` 폼을 처리하는 경우, `single()`, `array()`, `fiedls()`도 사용할 수 있다.

### 파일을 전송하는 클라이언트 측 예시

`multer`를 사용하기 위해서는 파일을 전달하는 `form`의 인코딩 타입이 반드시 `multipart/form-data`여야 한다. 다음 코드 예제에서는 `form`에 `method`를 `post`로, `action`으로 라우트를 지정했다.

```jsx
function UploadPresenter() {
  return (
    <form
      css={Form}
      encType="multipart/form-data"
      method="post"
      action="/video/upload"
    >
      <div css={InputSection}>
        <label css={Label} htmlFor="file">
          File
        </label>
        <input
          onChange={uploadFile}
          multiple={false}
          type="file"
          id="file"
          name="file"
          accept="video/*"
          required
        />
      </div>

      {/* ... */}
    </form>
  );
}
```

### file 객체 사용

`multer` 미들웨어를 통해 전달되는 `request`에는 파일의 정보가 `file` 객체로 전달된다. 파일외에 전달되는 텍스트 필드가 있는 경우, 텍스트는 일반적인 경우와 동일하게 `body`에 담겨 있다.

```javascript
export async function postUpload(request, response) {
  const {
    file: { path },
    body: { title, description, publish, category },
  } = request;

  try {
    await Video.create({
      title,
      description,
      publish,
      category,
      path,
    });

    return response.status(200).redirect("/");
  } catch (error) {
    return response.status(400).json({ uploadSuccess: false, error });
  }
}
```

### 저장한 파일에 접근하는 방법

```javascript
app.use("/uploads", express.static("uploads"));
```

저장한 파일은 `/uploads` 위치에 저장되며, 해당 파일에 접근하기 위해서는 해당 경로를 담당하는 라우터가 요구된다. 따라서 위 코드 예제와 같이 정적 파일 제공을 위한 `express.static(path)` 메소드를 사용한다.
