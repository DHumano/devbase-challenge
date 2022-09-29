import styled from 'styled-components';

const Layout = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: center;
  color: white;
  font-family: 'Roboto';
`;

const Wrapper = styled.div`
  background: #282828;
`;

const Button = styled.div`
  cursor: pointer;
  color: white;
  position: fixed;
  margin: 25px;
`;

export { Layout, Wrapper, Button };
