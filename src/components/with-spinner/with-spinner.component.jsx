import React from "react";
import { SpinnerOverlay,SpinnerContainer } from "./with-spinner.styles";

const WithSpinner = WrappedComponents => {
    
    const Spinner =({
    isLoading , ...OtherProps
}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ): 
    (<WrappedComponents {...OtherProps} />)
}
return Spinner
}
export default WithSpinner;