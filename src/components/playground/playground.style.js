import styled from "styled-components";

export default styled.div`
  .top_section {
    display: grid;
    grid-template-columns: 1fr max-content;
  }
  .playground_body {
    display: flex;
    flex-wrap: wrap;
  }
  .playground_body > * {
    border: 0.1rem solid ${props => props.theme.color.primary};
    width: 50vw;
    min-width: 25rem;
    padding: 0.5rem;
    min-height: 45vh;
    @media only screen and (max-width: 799px) {
      min-width: 100vw;
    }
  }
`;