import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';

import { ReactComponent as Logo } from '../../assets/pics3/logo.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

import './header.styles.scss';

const Header = (props) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>
                {
                    props.currentUser ? 
                    <OptionDiv onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionDiv>
                    : 
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                props.hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// const mapStateToProps = (state) => {
//     return {
//         currentUser: selectCurrentUser(state),
//         hidden: selectCartHidden(state)
//     }
// }

export default connect(mapStateToProps)(Header);