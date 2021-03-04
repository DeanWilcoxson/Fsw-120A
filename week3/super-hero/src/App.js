import React, { Component } from "react";
import Data from "./Heroes";
export default class App extends Component{
  render() {
    console.log(Data);
    let heroes = Data.map((x) => {
      console.log(x)
      return (
        <div key={x.id}>
          <button
            onClick={() => {
              alert(x.catchPhrase);
            }}
          >
            <img src={x.imageName} style={{width:"100%"}}alt="catphoto.jpeg"></img>
            <h1>{x.name}</h1>
            <h3>{x.show}</h3>
          </button>
        </div>
      );
    });
    return <div>{heroes}</div>;
  }
}
