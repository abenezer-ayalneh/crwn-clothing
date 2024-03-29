import React from "react";
import {SpinnerContainer, SpinnerOverlay} from "./with-spinner.sytles";

const WithSpinner = (WrappedComponent) => ({isLoading, ...otherProps}) => {
    return isLoading ?
        (<SpinnerContainer>
            <SpinnerOverlay/>
        </SpinnerContainer>)
        : <WrappedComponent {...otherProps}/>
}

export default WithSpinner