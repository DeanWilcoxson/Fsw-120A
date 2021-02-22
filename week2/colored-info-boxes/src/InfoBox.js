import { React } from "react";
function InfoBox(props) {
  let info = props.info;
  let title = props.title;
  let bgColor = props.bgColor;
  let subTitle = props.subTitle;
  let divStyle = {
    backgroundColor: bgColor,
    color: "black",
    borderRadius: "15px",
    boxShadow: "2px 2px 4px grey",
  };
  let h1Style = {
    marginTop: "15px",
    paddingTop: "15px",
    textAlign: "center",
    textShadow:"3px 3px 5px black",
    textDecoration:"underline",
  };
  let contentStyle = { paddingLeft: "20px", textAlign:"center" };
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>{title}</h1>
      <hr />
      <h3 style={contentStyle}>{subTitle}</h3>
      <p style={contentStyle}>{info}</p>
      <p style={contentStyle}>Background Color: {bgColor}</p>
    </div>
  );
}
export default InfoBox;
