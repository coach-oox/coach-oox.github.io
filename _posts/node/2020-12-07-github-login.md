---
layout: post
title: "Node GitHub 소셜 로그인 구현하기"
category: [node]
tags: [node, express, github]
comments: true
---

## 작업 흐름

> [Authorizing OAuth Apps](https://docs.github.com/en/developers/apps/authorizing-oauth-apps)

1. Users are redirected to request their GitHub identity
2. Users are redirected back to your site by GitHub
3. Your app accesses the API with the user's access token

## 애플리케이션 → GitHub

[GitHub New OAuth Application](https://github.com/settings/applications/new) 페이지에서 새로운 애플리케이션을 등록하고 (홈페이지 URL은 `localhost`로 설정해두어도 됨) 발급되는 `client_id`를 복사해둔다. 이때 작성하는 Authorization callback URL은 GitHub 로그인이 성공했을 때 콜백 될 URL 경로를 작성한다. (예 : `https://localhost:4000/users/github/callback`)

```pug
a(href="https://github.com/login/oauth/authorize") GitHub
```

프론트엔드 파트에서 GitHub 로그인을 위한 페이지로 이동하게끔 링크를 생성한다. 베이스 URL 뒤에는 `client_id` 항목이 필수로 들어가야 하고, 원하는 옵션을 [Parameters](https://docs.github.com/en/developers/apps/authorizing-oauth-apps#parameters) 지정한다.

### Parameters

```pug
a(href="https://github.com/login/oauth/authorize?client_id=aadafsdfasdfsdf&allow_signup=false&scope=read:user user:email") Continue with GitHub &rarr;
```

`scope`에는 [Available Scopes](https://docs.github.com/en/developers/apps/scopes-for-oauth-apps#available-scopes)를 참고하여 사용자 정보 중 필요한 부분 (액세스 할 부분)을 지정한다. `read:user`는 사용자의 프로필 정보를 읽을 권한을, `user:email`은 사용자의 이메일 주소를 볼 권한을 얻는다.

`allow_signup`에는 GitHub 로그인 페이지에서 계정이 없는 경우 사용자가 GitHub에 회원 가입을 할 수 있는 링크를 제공할 것인지 여부를 결정한다. `false`로 두면 GitHub 로그인 페이지에 회원 가입하기 버튼이 생성되지 않는다.

## GitHub → 애플리케이션

```javascript
userRouter.get("/github/callback", callbackGithubLogin);
```

이제 로그인이 성공했을 경우 GitHub 페이지에서 내 애플리케이션으로 콜백되는 함수를 작성한다. 이때 사용되는 경로는 처음에 GitHub에 애플리케이션을 등록할 때 작성했던 Authorization callback URL이다.

```javascript
GITHUB_SECRET = asdfaasdfsadfasdfasfd;
```

다음으로는 액세스에 필요한 `client_secret`을 발급하기 위해서, GitHub에 등록한 내 애플리케이션 페이지에서 Generate a new client secret 버튼을 클릭하고, 해당 `secret`을 복사하고 `.env`에 등록한다.

```javascript
https://localhost:4000/github/callback?code=aadfasdfasdfasdf
```

로그인에 성공하면 리다이렉션되는 URL은 위와 같다. 이때 Step 1. 에 대한 응답으로 `code` 파라미터가 넘어온다. (참고 : [Prameters](https://docs.github.com/en/developers/apps/authorizing-oauth-apps#parameters-1))

```javascript
export async function callbackGithubLogin(request, response) {
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code: request.query.code,
  };

  const params = new URLSearchParams(config).toString();
  const fianlUrl = `${baseUrl}?${params}`;

  const tokenRequest = await (
    await fetch(fianlUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
}
```

이제 `access_token`을 GitHub로 `POST`하기 위해 필수 파라미터 (`client_id`, `client_secret`, `code`)를 포함한 URL을 생성하고, `fetch()` 메소드를 사용해 비동기로 `POST` 요청을 보낸다.

```javascript
fetch(fianlUrl, {
  method: "POST",
  headers: {
    Accept: "application/json",
  },
})
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    console.log(json);
  });
```

또는 `fetch()` 메소드와 `then()` 메소드를 사용해서 위와 같이 요청을 보낼 수도 있다. **이때 Node 환경에서 `fetch()` 메소드를 사용하기 위해서는 `node-fetch` 라이브러리 설치와 `import`가 요구된다.**

```json
{
  "access_token": "afsdfasdfasdfasdfsdf",
  "token_type": "bearer",
  "scope": "read:user,user:email"
}
```

성공적으로 `POST` 요청이되면, 돌아오는 응답은 위와 같다.

## Access Token을 사용해 API 사용

```javascript
if ("access_token" in tokenRequest) {
  const { access_token } = tokenRequest;
  const apiUrl = "https://api.github.com";

  const userData = await (
    await fetch(`${apiUrl}/user`, {
      headers: {
        Authorization: `token ${access_token}`,
      },
    })
  ).json();

  const emailData = await (
    await fetch(`${apiUrl}/user/emails`, {
      headers: {
        Authorization: `token ${access_token}`,
      },
    })
  ).json();
} else {
  return response.redirect("/login");
}
```

위에서 전달받은 `json` 내부의 `access_token`을 사용해 위와 같이 API 요청을 보낸다. 요청이 성공적으로 처리되면, 요청한 데이터에 대한 JSON 응답을 받는다. (`userData`, `emailData`)

### API 사용하기

로그인 조건은 상황에 따라 다르고 정하기 나름 (참고 : [GitHub Reference - Users](https://docs.github.com/en/rest/reference/users))인데, 예시에서는 다음과 같은 상황을 가정한다.

1. 받아온 이메일 정보 중에 `primary`, `verified` 두 항목이 `true`인 이메일이 있는지 체크한다. 만약 없다면 해당 계정으로 로그인 할 수 없다.
2. 1번에 해당하는 이메일이 있다면 해당 이메일이 데이터베이스에 저장되어 있는지 확인한다. 만약 있다면, (이미 앞에서 `verified` 항목이 `true`임을 증명했기 때문에) 해당 아이디로 로그인한 것으로 치부한다. (여기서 '같은 이메일로 가입된 계정이 있으니 로그인 해라'와 같은 메시지를 안내하고, 로그인 페이지로 넘기는 경우를 고려해볼 수 있다.)
3. 만약 1번에 해당하는 이메일이 없다면 새로운 계정을 생성하고 데이터베이스에 저장한다. 이때 자동으로 로그인 처리까지 해준다.

```javascript
// 인증된 주 이메일이 있는지 확인
const emailObject = emailData.find((email) => {
  return email.primary === true && email.verified === true;
});

// 인증된 이메일이 없다면 로그인되지 않음
if (!emailObject) {
  return response.redirect("/login");
}

// 인증된 이메일이 있다면 해당 이메일이 데이터베이스에 있는지 검색
let user = await User.findOne({
  email: emailObject.email,
});

// 해당 이메일이 데이터베이스에 없다면 => 새로운 계정 생성 처리
if (!user) {
  user = await User.create({
    name: userData.name,
    username: userData.login,
    email: emailObject.email,
    password: "",
    location: userData.location,
    socialLogin: true,
  });

  // 세션에 정보를 추가하고 로그인 처리 후 리다렉션
  request.session.loggedIn = true;
  request.session.user = user;
  return response.redirect("/");
}
```

단, 소셜 로그인한 계정의 경우 패스워드가 지정되지 않았기 때문에 해당 부분을 어떤 규정을 토대로 정의할 것인지는 상황에 따라 다르다. 위 예제에서는 패스워드는 빈 문자열로 두고, 스키마에 `socialLogin` 항목을 만든 다음, 소셜에서 로그인한 (패스워드가 지정되지 않은) 계정은 `true` 값을 가지도록 정의했다.
