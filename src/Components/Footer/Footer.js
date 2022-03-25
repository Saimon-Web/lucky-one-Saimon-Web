import React from 'react';

const Footer = () => {
    return (
        <div>
            <h2>Props vs State</h2>
            <p>1.props are read only and state is read and write </p>
            <p>2. props data is passed from one component to another and state data	within the component only.</p>
            <p>3.Props cannot be modified and state can modified</p>
            <h2>How work useState</h2>
            <p>useState is a hook,which is can hold the elements of the variable.It has the initial value,to update this value,the variable returns from another fucntion.As a result,the value of the state changes when the value is updated.Can be used,to use the parameter must be passed to the component.</p>

        </div>
    );
};

export default Footer;