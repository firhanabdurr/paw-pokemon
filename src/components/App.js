import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import DetailPage from "./DetailPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/pokemon/:id' element={<DetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
