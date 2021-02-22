import { React } from "react";
import Spot from "./Spot";
function App() {
  return (
    <div
      style={{
        backgroundImage:
          'url(" https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80 ")',
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <b style={{ 
        fontSize: "30px",
        textDecoration:"underline"
     }}>Popular Vacation Spots!!!</b>
      <Spot />
    </div>
  );
}

export default App;
