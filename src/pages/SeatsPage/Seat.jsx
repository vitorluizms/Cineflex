import { useState } from "react";
import styled from "styled-components";

export default function Seat(props) {
  const {
    name,
    available,
    arrayClicked,
    setArrayClicked,
    nameSeat,
    seatNum,
    setSeat,
  } = props;
  const [clicked, setClicked] = useState(false);
  function seatSelect(selected) {
    let clone = [...arrayClicked];
    let cloneName = [...seatNum];
    if (available === false) {
      alert("Esse assento não está disponível!");
    }
    if (clicked === false && available === true) {
      clone.push(nameSeat);
      cloneName.push(selected);
      setClicked(true);
      setArrayClicked(clone);
      setSeat(cloneName);
    } else if (clicked === true && available === true) {
      setClicked(false);
      clone.pop();
      cloneName.pop();
      setArrayClicked(clone);
      setSeat(cloneName);
    }
  }
  return (
    <SeatItem
      data-test="seat"
      available={available}
      disabled={!available}
      clicked={clicked}
      onClick={() => seatSelect(name)}
    >
      {name}
    </SeatItem>
  );
}

const SeatItem = styled.div`
  border: 1px solid
    ${(props) =>
      props.available === false
        ? "#f7c52b"
        : props.clicked === true
        ? "#0E7D71"
        : "#808F9D"};
  background-color: ${(props) =>
    props.available === false
      ? "#FBE192"
      : props.clicked === true
      ? "#1AAE9E"
      : "#C3CFD9"};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
