import React from 'react'
import {
    BrowserRouter as Router,
    Routes,   // Route를 찾는 것, route은 localhost:3000"/movies/123"에서 ""에 있는 URL을 의미한다. Route을 찾으면 컴포넌트를 render을 한다.
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

/*function App() {
    return (
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/movie/:id" element={<Detail />}></Route>
        </Routes>
        <Routes> 
            <Route path="/" element={<Home />}>
            </Route>
        </Routes>
    </Router>);
}*/
import List from "./routes/List";
import Nav from "./components/Nav"
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
  
function App() {
    return (
      <RecoilRoot >
        <Router basename={process.env.PUBLIC_URL}>
          <Nav />
          <Routes>
            <Route path="/page/:detail/:num" element={<List />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </RecoilRoot>
    )
}

export default App;

// :id 가 아닌 id로 작성하면 "/movie/id" 이렇게 입력을 해야 이동한다. 그래서 : 추가