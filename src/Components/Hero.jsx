import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  background-color: var(--blue);
  color: var(--white);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .hero {
    &-title {
      margin-bottom: 4.81vw;
      font-weight: 500;
      text-align: center;
      /* 93.21 */
    }

    &-body {
      font-size: 1.125rem;
      font-weight: 300;
    }
    &-inner {
      max-width: 340px;
      margin: 0 auto;
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <div className="hero-inner">
        <div className="hero-title h2">Dummy Heading</div>
        <p className="hero-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          minus temporibus molestias accusantium fuga repellat, ea impedit
          asperiores quibusdam nemo!
        </p>
      </div>
    </StyledHero>
  );
};

export default Hero;
