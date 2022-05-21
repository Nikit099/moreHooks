import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prev) => (prev === "false" ? "true" : "false"));
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />

            <p>Прошлое {prevState.current}</p>
            <p>Настоящее {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Render
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
