import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid } from '@mui/material';

import { getSheets } from '../../actions/sheets';

import Form from "../Form/form";
import Sheets from "../Sheets/sheets";

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getSheets());
    },
    [currentId, dispatch]); // As soon as currentId is changed, start dispatch anew
  
    return(
        <Grow in>
            <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                <Sheets setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
            </Container>
        </Grow>
    )
}

export default Home;