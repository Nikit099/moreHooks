import React, { useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    return factorial(n);
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const buttonColor = otherState ? "primary" : "secondary";
    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value {value}</p>
                <p>{fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prev) => prev + 10)}
                >
                    Increment
                </button>
                <button
                    onClick={() => setValue((prev) => prev - 10)}
                    className="btn btn-primary ms-md-2"
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prev) => !prev)}
                >
                    COlor
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
