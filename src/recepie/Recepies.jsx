import React, { useState } from "react";
import styled from "styled-components";

const Article = styled.article`
  width: 350px;
  height: 300px;
  padding: 25px 50px;
`;
const Image = styled.img`
  width: 325px;
  height: 225px;
`;
const Recepies = ({ id, name, ingreedience, image, info }) => {
  const [readMore, setReadMore] = useState(false);

  if (info.length <= 120) {
    return (
      <Article>
        <Image src={image} alt={name} />
        <footer>
          <h4> {name}</h4>
          <p> {readMore ? info : `${info.substring(0, 110)}...`}</p>
        </footer>
      </Article>
    );
  } else {
    return (
      <Article>
        <Image src={image} alt={name} />
        <footer>
          <h4> {name}</h4>
          <p> {readMore ? info : `${info.substring(0, 120)}...`}</p>
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </footer>
      </Article>
    );
  }
};
export default Recepies;
