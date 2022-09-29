import * as S from './styled';
import Image from 'next/image';
import Button from '@mui/material/Button';

const ButtonUser = ({ onHandleClick, username }) => {
  const handleClick = () => {
    onHandleClick(username);
  };
  return (
    <>
      <S.Wrapper>
        <Button variant="contained" onClick={handleClick}>
          {username}
        </Button>
      </S.Wrapper>
    </>
  );
};

export default ButtonUser;
