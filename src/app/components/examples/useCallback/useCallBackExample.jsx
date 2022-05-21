import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const WithCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);
    useEffect(() => {
        WithCallback.current++;
    }, [validateWithCallback]);
    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>with {WithCallback.current}</p>
            <p>withOut {withOutCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                value={data.email || ""}
                onChange={handleChange}
                type="email"
                name="email"
                className="form-control"
                id="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
