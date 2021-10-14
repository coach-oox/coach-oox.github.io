---
layout: post
title: "GitHub Release 방법"
category: [git]
tags: [git, github]
comments: true
---

## 새로운 버전 릴리즈하는 방법

릴리즈란 개발 중인 프로젝트가 배포 준비가 되었을 때 (Alpha / Beta / Major) 패키지를 배포하는 것을 의미한다. GitHub에서 릴리즈하기 위해서는 저장소 페이지의 사이드바에서 Create a new release 버튼을 클릭하고, 다음을 참조하여 항목을 채운다.

### Tag Version

- v1.0
- v2.3.4
- v0.2-alpha
- v5.9-beta

### Release Title

- Version 1.0.2
- Something App v1.0
- Hello World v2.0-alpha
- Show Me The Money v3.5-beta

마지막으로 Description을 작성하고 관련 파일을 첨부한 뒤, (Alpha, Beta 버전의 경우 하단의 This is a pre-release 체크 항목을 선택) Publish release 버튼을 누르면, 자동으로 해당 저장소 모든 소스 코드가 압축 파일로 첨부된다.
