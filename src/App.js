// App.js
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BookDetail from "./pages/bookDetail";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
// import Header from "./components/header/header";

if (process.env.NODE_ENV !== "production") {
  loadDevMessages();

  loadErrorMessages();
}

const App = () => {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:bookId" element={<BookDetail />} />
      </Routes>
    </>
  );
};

export default App;
