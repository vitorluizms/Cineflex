import { useState } from "react";
import styled from "styled-components";

export default function Seat(props) {
  const { name, available } = props;
  const [clicked, setClicked] = useState(false);
  function seatSelect() {
    if (clicked === false && available === true) {
      setClicked(true);
    } else if (clicked === true && available === true) {
      setClicked(false);
    }
  }
  return (
    <SeatItem
      available={available}
      disabled={!available}
      clicked={clicked}
      onClick={seatSelect}
    >
      {name}
    </SeatItem>
  );
}

const SeatItem = styled.div`
  border: 1px solid
    ${(props) => (props.available === false ? "#f7c52b" : "#808F9D")};
  background-color: ${(props) =>
    props.available === false ? "#FBE192" : "#C3CFD9"};
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
