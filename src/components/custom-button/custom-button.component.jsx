import React from 'react';

// import './custom-buttom.styles.scss';

import { CustomButtonContiainer } from './custom-buttom.styles';

const CustomButton = ({ children, ...props }) => {
    // console.log(otherProps);
    return (
        <CustomButtonContiainer {...props}>
            {children}
        </CustomButtonContiainer>
    )
}

export default CustomButton;