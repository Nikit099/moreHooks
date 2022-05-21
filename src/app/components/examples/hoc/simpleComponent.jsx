import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLoginOut, isAuth }) => {
    return isAuth ? (
        <button onClick={onLoginOut}>Выйти из системы</button>
    ) : (
        <button onClick={onLogin}>Войти</button>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLoginOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
