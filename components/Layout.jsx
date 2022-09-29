import * as S from './styled';
import { useRouter } from 'next/router';

const Layout = ({ backButton, children }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <>
      <S.Wrapper>
        {backButton && <S.Button onClick={handleClick}>back</S.Button>}
        <S.Layout>Home</S.Layout>
      </S.Wrapper>
      {children}
    </>
  );
};

export default Layout;
