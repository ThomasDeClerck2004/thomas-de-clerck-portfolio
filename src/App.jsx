import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

// Page sections
import { Nav, Footer } from "./components";
import IndexPage from "./pages/indexPage";

function Main() {
	return (
    <Routes>
      <Route path={'/'} element={<IndexPage />} />
      <Route path={'/about'} element={<IndexPage />} />
      <Route path={'/work'} element={<IndexPage />} />
      <Route path={'/contact'} element={<IndexPage />} />
    </Routes>
	);
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#0d0d0d]">
        <Nav />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
