import React from "react";
import RecepieData from "./RecepieData";
import Recepies from "./Recepies";

const Recepie = () => {
  return (
    <div>
      <h1> Recepie</h1>
      {RecepieData.map((recepie) => {
        return <Recepies key={recepie.id} {...recepie} />;
      })}
    </div>
  );
};

export default Recepie;
