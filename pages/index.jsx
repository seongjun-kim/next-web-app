import Link from "next/link";

// const Child = () => {
//   return <p>Move to sub!!!</p>;
// };

const App = () => {
  return (
    <div>
      <h2>Link to sub page</h2>

      {/* Link 컴포넌트
        DOM을 가지진 않지만 <a>태그 클릭 시 클라이언트 내비게이션 실행으로
        페이지 전체를 다시 로드하지 않고 화면(주소) 이동이 가능하다.
       */}
      <div>
        <Link href="/category/top">
          <a>Move to '/category/top'</a>

          {/* <a> 태그를 쓰지 않아도 화면 이동은 이뤄지지만, SEO/접근성에 좋지 않다 */}
          {/* <p>Move to '/'</p> */}

          {/* Link 컴포넌트 내 리액트 컴포넌트에 링크를 연동하려면 반드시 <a>태그로 감싸주어야 한다. */}
          {/* <a>
          <Child />
        </a> */}
        </Link>
      </div>

      <div>
        <Link href="/category/bottom">
          <a>Move to '/category/bottom'</a>
        </Link>
      </div>

      <div>
        <Link href="/category/acc">
          <a>Move to '/category/acc'</a>
        </Link>
      </div>

      {/* Link 컴포넌트를 사용하지 않고 <a> 태그만 사용할 경우 
        페이지 이동(뒤로가기 포함)마다 페이지 전체를 매번 새로 받아오게 되어 속도가 느려지고 깜박임 현상도 발생한다.
      */}
      {/* <a href="/sub">Move to '/sub'</a> */}
    </div>
  );
};

export default App;
