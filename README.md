<h2>라우터: 멀티 웹페이지

<h3>
<details>
<summary>1. 리액트 라우터 기초</summary>

```javascript
https://reactrouter.com/en/main/router-components/browser-router
1. 리액트 라우터 설치
npm install react-router-dom@6

2. index.js 추가
import { BrowserRouter } from "react-router-dom";
<BrowserRouter>
    <App />
</BrowserRouter>
  
3. App.js 추가
import { Routes, Route } from "react-router-dom";
<Routes>
   <Route path="/" element={<Homepage />} />
   <Route path="/about" element={<Aboutpage />} />
</Routes>

라우터 기본형식
<Route path="/" element={} /> 
```
</details>

<details>
<summary>2. Link, Navigate 페이지 사이를 이동하는 법</summary>

```javascript
1. Link는 a 태그 형식과 비슷, 사용법
import { Link } from 'react-router-dom'
<Link to="/about">go to aboutpage</Link>

2. Navigate는 버튼에 onclick 함수로 보낼때 사용, 사용법
import { useNavigate } from 'react-router-dom'
const Aboutpage = () => {
    const navigate = useNavigate()
    
    const goToHomepage = () => {
        navigate("/") // 내가 가고싶은 주소
    }
  return (
    <div>
      <p>aboutpage</p>
      <button onClick={goToHomepage}>go to homepage</button>
    </div>
  )
}
```
</details>

<details>
<summary>3. Restful Routes(UI 디자인 패턴)</summary>

[예시 링크](https://res.cloudinary.com/practicaldev/image/fetch/s--_AutPXbf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nkstr1k2p1tthh7yvu9v.png)

```javascript
1. 사용법
<Route path="/product" element={<Productpage />} />
<Route path="/product/:id" element={<ProductDetailpage />} /> // /product/123 형식으로 접속가능

2. HTTP명령어
Get : 데이터를 가져올 때 쓰임. (fetch하면 기본 명령어 속성이 Get임)
Post : 데이터를 생성할 때 쓰임.
Put : 데이터를 수정할 때 쓰임. (Patch 라고도 불림)
Delete: 데이터를 삭제할때 쓰임.

3. Restful Route의 필요성
우리가 쇼핑몰 아이템을 보여주는 페이지가 있다고 가정하자
/getItem /createItem /updateItem /deleteItem
이런식으로 하면 이름에 통일성이 없어지고 
어떤 아이템에대해서 모든 생성,읽기,수정,삭제 행위에 대해서 총 4개의 url이 필요하다

이렇게 하면 url은 길고 복잡해진다. 이를 해결하기 위해 나온게 restful 디자인이다
url에서 동사는 빼고 이를 Http 명령어로 대체한다
따라서

/items + get 명령어 = 아이템읽어오기
/items + post 명령어 = 아이템 생성하기 
/items + put 명령어 = 아이템 수정하기 
/items + delete명령어 = 아이템 삭제하기
이런 규칙으로 바뀐다
즉 /items라는 url 하나로 4가지의 액션을 할 수 있게 되었다.

내가 하나의 아이템만 가져오고싶다면 뒤에 아이템의 id를 붙이는것도 restful route의 규칙이다

/items/:id +get 명령어 = id를 가진 아이템읽어오기 
/items/:id +put 명령어 = id를 가진 아이템 수정하기 
/items/:id +delete 명령어 = id를 가진 아이템 삭제하기
```
</details>

<details>
<summary>4. useParams: URL의 파라미터값을 읽어오자</summary>

```javascript
1. 사용법
import { useParams } from 'react-router-dom'
const params = useParams(); // {id: '1'} 
// id 라는 키값은 Route path="/product/:id" 의 :id에서 왔고 
// 벨류값은 현재 접속한 페이지번호값이다.
// 만약 Route path="/product/:id/:num" 이라면 {id: 'aaa', num: '23'} 이런식으로 나온다.

const {id} = useParams(); // Destructuring 
  return (
    <div>
      <p>Show Product Detail {id}</p> {/* 이런식으로 사용할 수 있다.*/}
    </div>
  )
  ```
</details>

<details>
<summary>5. useSearchParams: url 쿼리값을 읽어보자</summary>

```javascript
1. 쿼리란
  const navigate = useNavigate();
  const goProductpage = () => {
      navigate("/product?q=pants")
  }
<button onClick={goProductpage}>go to productpage</button>

/product?q=pants 페이지로 들어가보면 productpage가 잘 뜸
? 쿼리 뒤에 있는 값은 url 경로에 영향을 미치지 않기때문

2. 사용법
import { useSearchParams } from 'react-router-dom'
  let [query, setQuery] = useSearchParams();
  console.log(query.get("q")) // pants
  
  // 만약에 쿼리가 길때 ?q=skirt&num=2&page=3
 console.log(query.get("page")) // 3
 ```
</details>

<details>
<summary>6. Redirect: 페이지를 보호하는 법(가면 안되는 페이지)</summary>

```javascript
1. Navigate 컴포넌트 사용

2. 사용법
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => { // 첫글자 대문자이기 때문에 컴포넌트임
    return authenticate == true? <Userpage />: <Navigate to="/login" />;
  }
  return (
  <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />  
      <Route path="/product" element={<Productpage />} />
      <Route path="/product/:id" element={<ProductDetailpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/user" element={<PrivateRoute />} />
    </Routes>
  </div>
  );
}
```
</details>











