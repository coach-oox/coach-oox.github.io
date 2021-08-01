---
layout: post
title: "내가 사용하는 GitHub Issue 관리를 위한 Label 규칙"
category: [wiki, convention]
tags: [convention, github]
comments: true
---

GitHub에서 이슈를 (또는 PR)을 작성할 때 기본적으로 제공되는 레이블은 다음과 같다.

| Label              | Description                                |
| ------------------ | ------------------------------------------ |
| `bug`              | Something isn’t working                    |
| `documentation`    | Improvements or additions to documentation |
| `duplicate`        | This issue or pull request already exists  |
| `enhancement`      | New feature or request                     |
| `good first issue` | Good for newcomers                         |
| `help wanted`      | Extra attention is needed                  |
| `invalid`          | This doesn’t seem right                    |
| `question`         | Further information is requested           |
| `wontfix`          | This will not be worked on                 |

## 규칙

혼자 개발하거나 비공개 프로젝트를 협업으로 개발을 할 때 (외부에서 들어오는 이슈가 없는 경우 = 개발자들끼리만 사용하는 경우)가 많다보니 거기에 맞춰 조금씩 수정하다 완성된 리스트. 최근 5년간은 거의 변동없이 써오고 있다.

| Label           | Description                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bug`           | 버그                                                                                                                                                |
| `feature`       | 새로운 기능 개발에 대한 내용 (개발 후 PR 할 때 Close)                                                                                               |
| `enhancement`   | 기존 기능에 대한 개선 및 향상                                                                                                                       |
| `documentation` | 문서 관련 작업                                                                                                                                      |
| `suggestion`    | 새로운 기능 개발 아이디어 제안, <br>기존 기능 향상 또는 개선 아이디어 제안, <br>의사결정 후 불발이면 그냥 Close <br>통과하면 새 이슈로 옮기고 Close |
| `refactoring`   | 코드 개선이 필요한 경우 (기능은 바꾸지 않음)                                                                                                        |
| `invalid`       | 의문이 드는 부분, 확신할 수 없는 부분 이슈 제기                                                                                                     |
| `question`      | 질문                                                                                                                                                |

공개된 프로젝트 (내 경우 강의 자료 등)의 경우에는 질문 카테고리에 관련된 레이블을 추가한다.
