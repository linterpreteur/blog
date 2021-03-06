---
title: "GDG DevFest Seoul: 늦은 후기"
date: 2018-11-26T11:11:40+09:00
cover: /images/covers/GDGDevFestSeoul18.jpg
categories:
  - 후기
tags:
  - 개발
  - 구글
  - 안드로이드
  - 웹
comments: false
---

 나는 구글을 좋아한다. 아주 많이 좋아한다. 내가 GDG 행사를 이번에야 처음 가게 되었다는 것이 스스로 쪼오오끔 수치스러울 만큼 좋아한다. 아무튼 다녀온 GDG 데브페스트 서울은 정말 훌륭했다.

 여느 때처럼 방구석에서 폰을 들여다 보다가 공지를 보게 되었다. 아, 구글! 데브페스트는 GDG(Google Developers Group)에서 개최하는 행사로서 구글 기술과 관련된 발표 세션 등으로 이루어진다. 시간표를 쭉 본다. 텐서플로, 안드로이드, 크롬, 웹, 플러터, GCP, 고, 벌써 좋아 죽겠다.

 읽다 보니 못 참겠다.

![SHUT UP AND TAKE MY MONEY!](https://i.kym-cdn.com/photos/images/newsfeed/000/264/241/9e9.gif)

 전날까지도, 당일 아침까지도 어떤 발표들을 들어야 하나 고민을 했다. [두뇌풀가동](https://namu.wiki/w/%EB%91%90%EB%87%8C%ED%92%80%EA%B0%80%EB%8F%99)! 고심 끝에 들었던 순서는 다음과 같았고 후회 없이 알차게 들었다.

1. Data Uni-Directional Architecture in Android
2. 함수형 프로그래밍과 안드로이드 테스팅
3. 빠르다는 것 그 이상, Isomorphic PWA
4. Android DataBinding for Modularization, ViewModel and Testing
5. Chromium/Blink는 어떻게 동작하는가?

 최근 포트폴리오가 죄다 웹에 그 중에도 거진 프론트엔드라 웹 프론트엔드를 최대한 피해보려 했으나... 배운 게 도둑질이라고, 텐서플로는 배우다가 말았고 등의 이유로 다섯 개 중 두 개를 관련 세션을 듣게 되었다. 안드로이드는 내가 프로그래밍을 동아리에서 안드로이드로 입문하기도 했고, 트렌드는 지속적으로 캐치업하고 싶은 마음이 있었기 때문에 꾸득꾸득 찾아서 들었다. 세션을 순서대로 짚으면서 회고해 보도록 하겠다.

---

### [Data Uni-Drectional Architecture in Android](https://drive.google.com/file/d/1v_JLHObtCHnua1fY4TNc4Psqo11P1mfr/view)

 본 세션에서는 클라이언트에서 발생하는 상태 관리의 어려움과 그 원인에 대해 알아보고, 그 해결책으로서 UDA가 어떻게 구성되는지를 다루었다. 단방향 아키텍처, UDA가 무엇인고 하느니 프론트엔드 개발자라면 모를 수 없는, 플럭스나 리덕스 또는 뷱스 등 스토어를 이용한 상태 관리 패턴이라고 할 수 있겠다. 이러한 상태 관리의 아이디어는 페이스북에서 [플럭스 아키텍처](http://facebook.github.io/flux/)를 제시하고 한 발 나아가 [리덕스](https://redux.js.org/)를 내놓으면서 프론트엔드 개발의 패러다임을 휘어잡았다. 이게 벌써 몇 년 전의 일이었고, 안드로이드에서 이 아이디어를 눈여겨 보게 된 것은 그보다 뒤의 일인 것 같다. 아님 말고. 

 안드로이드 자바 코드로 작성된 플럭스와 리덕스를 비교해 보고 Hannes Dorfmann의 MVI 아키텍처를 살펴 보았다. MVI 아키텍처는 유저 액션이 _인텐트_ 로 해석되어 _모델_ 로 전달되면 해당되는 _뷰_ 가 내용을 변경하는 구성이다. 리액트-리덕스 식으로 보자면 인텐트가 액션, 모델이 스토어, 뷰가 컴포넌트 되시겠다. 그런데 듣다 보니까 그 도식이 그대로 옮겨진 것 같아서 솔직한 심정으로는 이게 따로 이름 붙일 만한 아키텍처인가 싶더라고. 이 생각이 드니까 딴짓을 하게 되고 그러다가 찾은 게 렘에서 낸 [아티클](https://academy.realm.io/posts/eric-maxwell-uni-directional-architecture-android-using-realm/)이었다. 거의 같은 내용이지만 이쪽이지만 이게 또 같은 말을 다른 방식으로 두 번 듣는 게 유효한 경우가 많아서, 해당 아티클은 내 경우에는 도움이 되었다.

 상태 관리에 대해 한 번 랩업을 하고 들어가는 느낌이, 첫 세션으로 잘 골랐다고 생각하게 되는 발표였다.

### [함수형 프로그래밍과 안드로이드 테스팅](https://drive.google.com/file/d/1MM51-3Jn4XBIm0Mieopp0C5x6C44j_S2/view)

 테스팅. 중요하다. 중요하지, 근데 나 같은 땔감은 늘상 빼먹는다. 함수형도 좋다. 함수형이란 게 약간 혁신 뭐시기나 스마트 어쩌구 사차산업 어쩌구처럼 아무튼 좋은 것인 것처럼 느껴지는 관형구인 지도 얼마가 되었다. 그러니 안 들을 수가 없다. 결론부터 말하자면 기대에 들어차는 세션이었다.

> The android.jar file that is used to run unit tests does not contain any actual code - that is provided by the Android system image on real devices. Instead, all methods throw exceptions (by default). This is to make sure your unit tests only test your code and do not depend on any particular behaviour of the Android platform (that you have not explicitly mocked e.g. using Mockito).

> 유닛 테스트에 사용되는 android.jar 파일에는 실제 코드가 없습니다. 실제 기기에서는 Android 시스템 이미지가 해당 파일을 제공합니다. [유닛 테스트에서는] 대신, 모든 메소드가 예외를 던지는 동작이 기본입니다. 유닛 테스트에서는 여러분이 작성한 코드만 테스트되어야 하고 (Mockito 등을 이용해 명시적으로 넣어주지 않는 한) 안드로이드 플랫폼의 특정 동작에 의존하면 안 되기 때문입니다.

 안드로이드 테스팅의 난점으로부터 시작한다. 부끄러운 이야기지만 처음 알았다. 더 부끄러운 이야기지만 안드로이드 테스트 코드를 몇 줄 써본 적이 없다. 개발을 독학하다 보니 헤매느라 테스팅에 대해서 알게 된 것이 꽤나 늦은 시기였던 데다가 최근 몇 년 동안, 최근이라고 해봐야 전역한 것이 2년이 안 되었지만, 안드로이드 프로그래밍을 해본 것이 소규모 프로토타입 외주나 아니면 동아리에서 예제 치면서 강의할 때뿐이었는데, 두 경우 다 굉장히 작은 규모로 작성한 코드였기 때문이(라고 합리화를 해본)다. 이러한 연유로 나는 테스트 코드를 쓰는 버릇을 조금 더 들여야 하고 안드로이드 개발자는 유닛 테스트에 플랫폼 코드를 넣어서는 아니 된다. 그래서 플랫폼 의존적인 코드를 돌려야겠다면, Mockito나 Roboelectric으로 스텁<span class="ruby">stub</span>을 밀어 넣어주는 방법이 있다. 그래도 깔끔하게 가려면 코드를 분리하여 테스트하는 쪽이 옳으시겠다. 나는 [스텁을 사용하는 것이 영 마음에 안 들어서](https://www.thoughtworks.com/insights/blog/mockists-are-dead-long-live-classicists) 그렇게 주장하겠다.

 발표 내용도 유닛 테스트 가능한 코드를 분리하여 테스팅하는 것을 다루는 쪽으로 넘어간다. 플랫폼에 의존적인 코드는 뷰 단에 작성하고, 뷰를 최대한 수동적으로<span class="ruby">passively</span> 작성한다는 것이다. 뷰가 수동적이라는 것은, 리액트에서는 멍청하다<span class="ruby">dumb</span>거나 레일즈 쪽에서는 날씬하다<span class="ruby">skinny</span>고도 표현하는데, 다른 모듈 내부에서 일어나는 동작에 대한 가정이나 지식이 최소화된 채 자기 일만 하도록 되는 방향이라고 생각하면 될 것 같다. 뷰를 수동적으로 바꾼 후에, 함수형 프로그래밍과 테스팅의 접점이 제시된다. 특정한 동작이 실행되었는지 여부 즉 사이드 이펙트를 `Mockito::verify` 따위로 검사했던 코드를, FP를 이용하면 순수해진 테스트 대상 함수의 아웃풋 - 리턴 값을 이용하여 더욱 쉽고 직접적이고 우아하게 검사할 수 있다는 것이다.

 간결하고 유익한 발표였다. 그리고 MVP 패턴도 따로 앱을 작성해 보거나 붙잡고 들여다 본 적이 없어서 이해가 붕 떠 있었는데 본 세션의 예제를 통해 MVP를 한 걸음 더 이해하게 되었다. FP는 볼 때마다 예쁘고 산뜻하다. 불변성에서 기인하는 예측가능성이 참으로 사랑스럽다. 그럼에도 나의 직관이 상태와 뮤테이션을 자꾸 찾는 것이 안타깝다.

### 빠르다는 것 그 이상, Isomorphic PWA

 두괄식으로 말하자면, 정말 눈물겹고 마음 아린 세션이었다.

 느린 웹이 공포 영화보다 큰 스트레스를 유발한다던가 [TTI](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive), 자바스크립트가 같은 용량의 다른 리소스보다 파싱 등의 과정 때문에 훨씬 시간 비용이 많이 든다는 등 초장부터 흥미로우면서도 유용한 정보들을 얻을 수 있었다. 이러한 문제의 해결책으로 제시된 것이 구글의 [PRPL](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)이었고, 구체적인 방안은 웹 개발자들에게 훨씬 더 익숙한 코드 스플리팅과 레이지 로딩이다. React Loadable이라는 라이브러리와 ES의 다이내믹 임포트 구문 그리고 웹팩을 통하여 코드 스플리팅을 처리하는 이야기였는데, 마침 행사가 있었던 그 주에 전날인 금요일까지 관련 문제를 힘겹게 처리하고 간 터라 발표이기 때문에 생략된 모든 삽질들이 꼭 나의 일만 같아 더욱 슬프고 그러하였다.

 그 뒤로는 SSR과 PWA 이야기였다. 솔직히 말하면 여기서부터는 대충 들었다. SSR에 대해서는 "처음부터 고려하고 만들지 않은 코드에 적용하려면 삶이 굉장히 피곤해지고, 직접 한 땀 한 땀 수 놓느니 프레임워크를 쓰는 것이 속편하다" 정도로 내가 이미 생각하고 있었고 실제 발표 내용도 그렇게 이어졌던 것이다. PWA도 마찬가지로 "서비스 워커 등을 이용해 오프라인 환경에서도 서비스를 제공하는 등 몇 가지 가이드라인이 있는데 이건 [Lighthouse](https://developers.google.com/web/tools/lighthouse/) 같은 걸 보는 게 속편하다" 정도로 알고 있었다. 발표 말미에 나온 [Workbox](https://developers.google.com/web/tools/workbox/)마저도 행사일 얼마 전에 찾아서 적용했던 내용이라, 이러나 저러나 복습하는 내용으로 쭉 들을 수 있었다.

### [Android DataBinding for Modularization, ViewModel and Testing](https://drive.google.com/file/d/1ZetMCoLF0U_TjZHOz3_jts2t31PqfmRs/view)

 데이터바인딩도 늘 살펴보고 싶은 주제였는데 상술했듯 근래 안드로이드 코드를 칠 기회가 잘 없기도 했고 하여, 이 세션이 너무 반가웠다. 내가 MVP 패턴이 항상 껄끄러웠던 부분은 해당 발표에서 "글루 코드"라고 지칭한 단순 접합 코드가 많아 장황하고 거추장스러운 느낌이 든다는 점이었다. 하지만 데이터바인딩과 MVVM 패턴으로 이 문제를 극복할 수 있다는 것이 본 세션의 요지!

 난 MVVM이 참 좋다. 데이터 바인딩도 너무 좋다. 그래서 뷰<span class="ruby">Vue</span>도 참 좋아한다.

 최근 얼마 간 뷰를 써서 웹 개발을 해온 입장에서는 흥미롭고 쉽게 들을 수 있었다. MVP 아키텍처가 데이터바인딩을 차용함으로써 자연스레 보다 간결한 모습의 MVVM 구조로 변해가는 과정이 흡인력 있게 그려졌다. 뷰에서 사용하는 표현식에 대한 몇 가지 주의점도 짚고 넘어가고, 재미가 있었다.

 이 세션의 가장 흥미로웠던 점은 발표가 여기서 끝나지 않고 데이터바인딩 라이브러리를 통해 생성된 코드 내부를 까보는 데까지 이르렀다는 데 있다. 해당 코드가 더티 플래그를 통해 어떻게 실제 뷰를 업데이트하는지 살펴본 것은, 마음먹고 하면 누구나 할 수 있지만 보통은 안 하는 일이기에 알찬 내용이었다. 아무튼 이 발표까지 들었던 안드로이드 관련 키워드가 UDA, FP와 테스터빌리티, 데이터바인딩까지였는데 이를 어떻게 조합할 수 있을지 같은 생각들이 떠올랐다. 

### Chromium/Blink는 어떻게 동작하는가?

 가장 기대를 많이 하고 들어간 세션이었다. 발표자는 [삼성 인터넷](https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser)을 개발하는 분이셨다. 내가 비전공생인데 컴공 수업을 아직 많이 안 듣기도 했고 나름 찾아본다고 찾아보기는 하지만 독학의 한계일는지 항상 [What happens when...](https://github.com/alex/what-happens-when/blob/master/README.rst) 류의 질문에 약한 게 스스로 무시할 수 없는 약점이라고 늘 생각했기 때문이다. 이렇게라도 틈틈이 귀동냥을 해 두어야 성골 개발자 분들이 로우 레벨의 무언가로 농담을 하셨을 때 멀뚱멀뚱 있다가 키보드로 뚜드려 맞고 쫓겨나지 않을 수 있다. 티끌 모아 티끌이라도 쌓아 놔야 따라서 웃을 수 있는 능력이라도 생기게 되는 것이다.

 우둔한 나에게 다양한 정보들이 쏟아졌다.  크로뮴의 소스 코드는 크기만 13GB에 달하고 빌드만 세 시간이 걸린다고 한다는 다소 나무위키에 어울릴 법한 정보도 있었다. 또 다른 것은 크로뮴은 멀티 프로세스 아키텍처이기 때문에 한 탭이 죽어도 전체 브라우저가 죽지 않고, 메모리를 공유하는 스레드와 달리 보안 상의 이점 또한 챙길 수가 있다는 것이었다. 그래서 램도 막 먹나 보다. 요 정도 하고서, 정말 흥미로운 부분은 브라우저 렌더링을 다루는 내용부터였다. 사실 이쪽이 발표의 대부분이었다.

 HTML은 DOM 트리로 파싱이 된다. 이때 CSS 코드가 셀렉터들과 CSS 속성들의 쌍으로 이루어진 자료 구조로 해석된다. DOM이 생성되면 해당 데이터를 가지고 스타일을 적용하게 된다. 레이아웃 트리를 생성할 때에는 `display: none;` 속성을 가진 노드 등은 생략된다. 실제로 화면에 그려질 대상만 레이아웃 트리에 들어가는 것이다. 하지만 문제가 있으니, 60Hz 모니터를 기준으로 이 과정이 16.67ms 이내에 이루어지지 않으면 프레임이 넘어가게 되면서 부드럽게 화면을 그려낼 수 없다는 것이다.

 이를 해결하기 위하여 블링크 엔진은 레코딩부터... 컴포지팅과... 다양한... 대충 들은 건 아닌데 내가 이해한 바를 글로 깔끔하게 옮길 자신이 없다. 대강 요약하자면 할 일을 쪼개서 다른 스레드에 나눠준 다음, 결과를 받아 합성해 화면에 출력한다는 것이다. 이럴 줄 알았으면 하다 못해 노트북 필기라도 할 것을 그랬다. 휴학도 오래 했고 공부란 걸 대학 들어와서 생 놔버렸더니 이런 사단이 나버렸다. 발표 자료는 아직 올라오지 않았고 [비슷한 내용](https://www.chromium.org/developers/the-rendering-critical-path)을 크로뮴 사이트에서 찾을 수 있었다.

 이후에는 GPU 가속 관련 이야기가 이어졌다. 들으면서 한 가지 든 생각은, 블링크에서 OpenGL을 통해 화면을 그려낸다면 미래의 OS X에서는 호환 레이어라도 제공할 요량인 건가 싶었다. 브라우저 개발이나 그래픽 라이브러리나 잘 아는 사람들이 알아서 하겠지만... 그리고 또 흥미로웠던 것은 CSS의 각 속성이 [서로 다른 수준으로 화면 변경을 일으킨다](http://csstriggers.com)는 것이었다. 낮은 수준의 동작을 추상적으로나마 알아둬야 이런 것도 이해할 수 있게 되는 것이다. 말마따나 TCP 위에 웹이 바로 있었던 예전과 달리, 웹 애플리케이션 개발자가 TCP에 대해 굳이 몰라도 프로덕트 생산에 막대한 없는 것이지만, 이렇게 저수준 지식과 고수준의 응용이 맞닿는 지점을 발견할 때마다 스스로를 돌아보게 된다.

---

 훌륭한 행사였다. 깜찍한 스티커도 많이 생겼다. 비록 마지막 세션 시작하기 전에 의자에 짐을 두고 바람을 쐬고 왔더니 죄다 짐이 사라져서 오만 군데를 다 헤집고 다니는 황당한 에피소드... 나는 아직도 그 물건들이 왜... 따로 둔 것이 서로 같이 있고 같이 둔 것이 따로 있는 식으로 흩어져 분실물로 접수가 되었는지 도무지 이해가 안 되지만... 하...... 이 기회를 빌어 짐을 찾는 데 성심성의껏 도와주신 현장의 모든 분들께 다시 한 번 감사드립니다.

 GDG 행사, 눈 여겨보다가 반드시 또 가야겠다. 짜릿해, 늘 새로워, 재밌는 게 최고야.

