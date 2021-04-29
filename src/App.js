import React from "react";
import Footer from "./components/Footer";
// import SearchForm from "./components/SearchForm";
import Header from "./components/Header/Header";
import Employees from "./components/Employees";
function App() {
  return (
    <>
      <div>
        <Header/>
        <Employees/>
        <Footer />
      </div>
    </>
  );
}

export default App;
