import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top:2em;
  font-family: 'Roboto', sans-serif;
  font-size:20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  width: 500px;
`;

const Button = styled.div`
  width:150px;
  cursor: pointer;
  height: 20px;
  background: #3B89FF
`;

const Wrapper = styled.div`
  display: flex;
`;

export {
  Box, ImageWrapper, Button, Wrapper
};

