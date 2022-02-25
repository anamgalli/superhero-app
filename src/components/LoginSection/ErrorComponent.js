import React from "react";

const ErrorComponent = (props) => {
    return(
        <div className="error-form">
            {props.children}
        </div>
    )
}

export default ErrorComponent;