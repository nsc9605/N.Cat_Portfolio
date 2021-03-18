import React from 'react';


function ContainerFluid(props) {
    return <div className="container" style={props.style}>{props.children}</div>;

}

export default ContainerFluid;