import React from "react";
import {CircularProgress} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const LoadingScreen = () => (
    <Container style={{minWidth:'100%',alignItems:'center'}} fixed>
        <CircularProgress />
        <p>Loading...</p>
    </Container>
);

export default LoadingScreen;
