import React from "react";
import BlogList from "./Components/BlogList";
import Header from './Components/Header'
import Footer from './Components/Footer'
import "./Styles.css";

function App() {
  return (
    <div>
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
