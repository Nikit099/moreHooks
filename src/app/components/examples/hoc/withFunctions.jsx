import React from "react";
import Card from "../../common/Card";
const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    const onLogin = () => {
        localStorage.setItem("user", "gotIt");
    };
    const onLoginOut = () => {
        localStorage.removeItem("user");
    };
    return (
        <Card>
            <Component
                isAuth={isAuth}
                onLogin={onLogin}
                onLoginOut={onLoginOut}
            />
        </Card>
    );
};

export default withFunctions;
