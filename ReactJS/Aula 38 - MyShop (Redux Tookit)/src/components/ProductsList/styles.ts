import styled from "styled-components";

export const Container = styled.main`
  max-width: 1100px;
  margin: 4rem auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;

  & > * { /*Nesse mesmo elemento 'container', no nível abaixo dele... */
    flex: 1 300px; /* Estique o máximo que puder e no minimo 300px de largura, caso contrário há de quebrar o grid */
  }
`;
