import styled from 'styled-components';

interface ContainerProps {
  $showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$showCart ? '0' : '-300px')};

  width: 300px;
  height: 100vh;
  background-color: white;

  padding: 2rem;
  box-shadow: -5px 0 20px rgba(0, 0, 0, .25);

  transition: right 0.5s;
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItem = styled.li``;

export const CartTotal = styled.strong``;

export const RemoveButton = styled.button`
  background-color: red; 
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;