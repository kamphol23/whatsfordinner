import React from "react";
import styled from "styled-components";
import RecepieData from "./RecepieData";
import Recepies from "./Recepies";

const Container = styled.div`
  padding: 50px;
  display: flex;
`;
const Recepie = () => {
  return (
    <div>
      <h1> Recepie</h1>
      <Container>
        {RecepieData.map((recepie) => {
          return <Recepies key={recepie.id} {...recepie} />;
        })}
      </Container>
    </div>
  );
};

export default Recepie;
