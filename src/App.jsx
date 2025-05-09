import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Gallery from "./pages/Gallery";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    overflow: hidden;
    background: linear-gradient(135deg, #FFA5D9 0%, #B0329A 100%);
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
