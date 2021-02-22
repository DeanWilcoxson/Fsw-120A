import { React } from "react";

let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring",
  },
  {
    place: "Cancun",
    price: 900,
    timeToGo: "Winter",
  },
  {
    place: "China",
    price: 1200,
    timeToGo: "Fall",
  },
  {
    place: "Russia",
    price: 1100,
    timeToGo: "Summer",
  },
  {
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring",
  },
];

function Spot() {
  let spotCard = vacationSpots.map((spot) => {
    let divStyles = {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      margin: "50px",
      border: "1px solid ",
    //   backgroundColor: changeBgColor(),
        backgroundColor: "rgba(128, 128, 128, 0.524)",
    };
    let placeStyles = {
      textAlign: "center",
      padding: "20px",
      gridColumn: "1/3",
    };
    let priceStyles = {
        fontSize:"24px",
      textAlign: "center",
      gridColumn: "1/2",
    };
    let timeToGoStyles = {
        fontSize:"24px",
      textAlign: "center",
      gridColumn: "2/3",
    };
    // function changeBgColor() {
    //   let spot2 = document.getElementsByClassName("spot");
    //   let spot3 = spot2.map((x) => {
    //     if (spot.timeToGo === "Spring") {
    //       x.backgroundColor = "blue";
    //       return(spot3)
    //     }
    //   });
    // }
    return (
      <div className="spot" style={divStyles}>
        <h1 style={placeStyles}>
          Location: <b>{spot.place}</b>
        </h1>
        <p style={priceStyles}>
          Price:
          <b>
            {spot.price < 500
              ? "$"
              : spot.price < 1000
              ? "$$"
              : spot.price > 1000
              ? "$$$"
              : "NAN"}
          </b>
        </p>
        <p style={timeToGoStyles}>
          Prime Time: <b>{spot.timeToGo}</b>
        </p>
      </div>
    );
  });

  return <div>{spotCard}</div>;
}
export default Spot;
