import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

export default function SessionsPage(props) {
  const { movies } = props;
  let movie = movies.find((element) => element.id === 2);
  const params = useParams();
  const [sessions, setSessions] = useState([]);
  console.log(movie);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.idFilme}/showtimes`
    );
    promise.then((answer) => {
      setSessions(answer.data.days);
    });
  }, []);
  if (sessions.length === 0) {
    return <div>Carregando...</div>;
  } else {
    return (
      <PageContainer>
        {sessions.map((session) => (
          <div key={session.id}>
            <SessionContainer>
              {" "}
              {session.weekday} - {session.date}{" "}
              <ButtonsContainer>
                {session.showtimes.map((time) => (
                  <Link to={`/assentos/${time.id}`} key={time.id}>
                    <button>{time.name}</button>
                  </Link>
                ))}
              </ButtonsContainer>{" "}
            </SessionContainer>
          </div>
        ))}
        <FooterContainer>
          <div>
            <img src={movie.posterURL} alt={movie.title} />
          </div>
          <div>
            <p>{movie.title}</p>
          </div>
        </FooterContainer>
      </PageContainer>
    );
  }
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
  div {
    margin-top: 20px;
  }
`;
const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto";
  font-size: 20px;
  color: #293845;
  padding: 0 20px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  button {
    width: 83px;
    height: 43px;

    background: #e8833a;
    border: none;
    border-radius: 3px;
    margin-right: 20px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.02em;

    color: #ffffff;
  }
  a {
    text-decoration: none;
  }
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
    align-items: flex-start;
    p {
      text-align: left;
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;
