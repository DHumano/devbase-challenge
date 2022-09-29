import * as S from './styled';
import Image from 'next/image';
import Button from '@mui/material/Button';
import ButtonUser from './ButtonUser';

const ButtonUserList = ({ fetchUsers, usernames }) => {
  return (
    <>
      <S.Wrapper>
        {usernames.map((elm) => (
          <ButtonUser onHandleClick={fetchUsers} key={elm} username={elm} />
        ))}
      </S.Wrapper>
    </>
  );
};

export default ButtonUserList;
