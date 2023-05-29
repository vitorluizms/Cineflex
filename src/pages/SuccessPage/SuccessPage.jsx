import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  const { name, cpf, nameSeat, infoFooter } = useLocation().state;
  let part1 = cpf.slice(0, 3);
  let part2 = cpf.slice(3, 6);
  let part3 = cpf.slice(6, 9);
  let part4 = cpf.slice(9, 11);

  return (
    <PageContainer>
      <h1>
        Pedido feito <br /> com sucesso!
      </h1>

      <TextContainer>
        <strong>
          <p>Filme e sessão</p>
        </strong>
        <p>{infoFooter.movie.title}</p>
        <p>
          {infoFooter.day.date} - {infoFooter.name}
        </p>
      </TextContainer>

      <TextContainer>
        <strong>
          <p>Ingressos</p>
        </strong>
        {nameSeat.map((seat) => (
          <p key={seat}>Assento {seat}</p>
        ))}
      </TextContainer>

      <TextContainer>
        <strong>
          <p>Comprador</p>
        </strong>
        <p>Nome: {name}</p>
        <p>
          CPF: {part1}.{part2}.{part3}-{part4}
        </p>
      </TextContainer>

      <Link to={"/"}>
        <button>Voltar para Home</button>
      </Link>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  color: #293845;
  margin: 30px 20px;
  padding-bottom: 0px;
  padding-top: 50px;
  a {
    text-decoration: none;
  }
  button {
    width: 225px;
    height: 42px;
    margin-top: 80px;

    background: #e8833a;
    border-radius: 3px;
    border: none;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;

    color: #ffffff;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #247a6b;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;

  color: #293845;
  strong {
    p {
      font-weight: 700;
      font-weight: bold;
      font-family: "Roboto";
      font-style: normal;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.04em;
    }

    margin-top: 10px;
    margin-bottom: 5px;
  }
  p {
    margin-bottom: -20px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
  }
`;
