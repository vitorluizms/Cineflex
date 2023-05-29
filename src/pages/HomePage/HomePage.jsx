import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  const { movies } = props;

  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {movies.map((movie) => (
          <Link to={`/sessoes/${movie.id}`} key={movie.id}>
            {" "}
            <MovieContainer>
              {" "}
              <img src={movie.posterURL} alt={movie.title} />
            </MovieContainer>{" "}
          </Link>
        ))}
      </ListContainer>
    </PageContainer>
  );
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
  padding-top: 70px;
`;
const ListContainer = styled.div`
  max-width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
`;
const MovieContainer = styled.div`
  width: 145px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  img {
    width: 130px;
    height: 190px;
  }
`;
