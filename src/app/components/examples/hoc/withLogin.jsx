import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return <>{isLogin ? <Component /> : <SmallTitle>Auth</SmallTitle>}</>;
};

export default withLogin;
