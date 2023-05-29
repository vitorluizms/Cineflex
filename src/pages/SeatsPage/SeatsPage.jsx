import Seat from "./Seat";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function SeatsPage() {
  const params = useParams();
  const [seats, setSeats] = useState([]);
  const [infoFooter, setInfo] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idSessao}/seats`
    );
    promise.then((answer) => {
      setSeats(answer.data.seats);
      setInfo(answer.data);
    });
  }, []);
  if (seats.length === 0) {
    <div>Carregando...</div>;
  } else {
    return (
      <PageContainer>
        Selecione o(s) assento(s)
        <SeatsContainer>
          {seats.map((seat) => (
            <Seat available={seat.isAvailable} key={seat.id} name={seat.name} />
          ))}
        </SeatsContainer>
        <CaptionContainer>
          <CaptionItem>
            <CaptionCircle />
            Selecionado
          </CaptionItem>
          <CaptionItem>
            <CaptionCircle />
            Disponível
          </CaptionItem>
          <CaptionItem>
            <CaptionCircle />
            Indisponível
          </CaptionItem>
        </CaptionContainer>
        <FormContainer>
          Nome do Comprador:
          <input placeholder="Digite seu nome..." />
          CPF do Comprador:
          <input placeholder="Digite seu CPF..." />
          <button>Reservar Assento(s)</button>
        </FormContainer>
        <FooterContainer>
          <div>
            <img src={infoFooter.movie.posterURL} alt="poster" />
          </div>
          <div>
            <p>{infoFooter.movie.title}</p>
            <p>
              {infoFooter.day.weekday} {infoFooter.name}
            </p>
          </div>
        </FooterContainer>
      </PageContainer>
    );
  }
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;
const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const FormContainer = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px 0;
  font-family: "Roboto";
  font-size: 18px;
  button {
    align-self: center;
  }
  input {
    width: calc(100vw - 60px);
    height: 30px;
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 5px;
  }
`;
const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
  div:nth-child(1) {
    div {
      background: #1aae9e;
      border: 1px solid #0e7d71;
    }
  }
  div:nth-child(2) {
    div {
      background: #c3cfd9;
      border: 1px solid #7b8b99;
    }
  }
  div:nth-child(3) {
    div {
      background: #fbe192;
      border: 1px solid #f7c52b;
    }
  }
`;
const CaptionCircle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;

  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    img {
      width: 50px;
      height: 70px;
      padding: 8px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: left;
      margin-top: -15px;
      &:nth-child(1){
        margin-top: 20px;
      }
    }
  }
`;
