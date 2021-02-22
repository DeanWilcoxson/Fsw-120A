import { React} from "react";
function InfoBox(props){  
    let info = props.info;
    let title = props.title;
    let bgColor = props.bgColor;
    let subTitle = props.subTitle;
    let style = {
        padding: "20px",
        marginTop: "5px",
    }
    return (
        <div style={style, {backgroundColor:bgColor, color:"black"}}>
            <h1>Title: {title}</h1>
            <h3 style={{paddingLeft:"20px"}}>Subtitle: {subTitle}</h3>
            <p style={{paddingLeft:"20px"}}>Info: {info}</p>
            <p style={{paddingLeft:"20px"}}>Background Color: {bgColor}</p>
        </div>
    )
  }
export default InfoBox;
