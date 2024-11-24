// import { HeaderTitle, StyledHeader } from "./styles";
import  * as S from './styles';

import { useState } from 'react';
import { Cart } from '../Cart/Cart';
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi' 

import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';

export const Header: React.FC = () => {

  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  const dispatch = useDispatch();

  function handleUserAuth(){
    // Usuário não logado
    if(user === null) {
      //Dispachar a action de login
      dispatch({
        type: 'user/login',
        payload: {
          name: 'Kayc',
          email: 'kayc@email.com',
        },
      });
    } else {
      dispatch({
        type: 'user/logout',
      });
    }
  }

  console.log(user);

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>My Shop.</S.HeaderTitle>

        <S.ButtonWrapper>
          <S.AuthButton $isLogged={isLogged} onClick={handleUserAuth}>
            { isLogged ? 'Logout' : 'Login' }
            { isLogged ? <FiLogOut /> : <FiLogIn /> }
          </S.AuthButton>
          
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonWrapper>
      </S.Wrapper>

      <Cart showCart={showCart}/>
    </S.StyledHeader>
  );
};
