import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import PropTypes from "prop-types";
import SmallTitle from "../../common/typografy/smallTitle";
const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    const hadleChange = (target) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };
    return React.Children.map(children, (child) => {
        const config = {
            ...child,
            onChange: hadleChange,
            value: data[child.props.name] || ""
        };
        return React.cloneElement(child, config);
    });
};
FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField name="email" label="email" />
                <TextField name="password" label="password" type="password" />
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
