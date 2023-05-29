import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  axios.defaults.headers.common["Authorization"] = "4wC4CuuPziLhfX4rSqYJaE9Z";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    promise.then((answer) => {
      setMovies(answer.data);
    });
    promise.catch((erro) => {
      alert("Ocorreu um erro!");
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavContainer>CINEFLEX</NavContainer>

        <Routes>
          <Route path="/" element={<HomePage movies={movies} />} />
          <Route path="/assentos/:idSessao" element={<SeatsPage />} />
          <Route
            path="/sessoes/:idFilme"
            element={<SessionsPage movies={movies} />}
          />
          <Route path="/sucesso" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: #e8833a;
  }
`;
