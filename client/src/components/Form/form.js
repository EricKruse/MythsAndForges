import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles"
import { createSheet, updateSheet } from "../../actions/sheets"

const Form = ({ currentId, setCurrentId }) => {
    const [sheetData, setSheetData] = useState({
        name: '',
        description: '',
        profession: '',
        creator: '',
        age: '',
        home: '',
        isPublic: false,
        SelectedFile: '',
        tags: ''
    })
    const sheet = useSelector((state) => currentId ? state.sheets.find((v) => v._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(sheet) setSheetData(sheet);
    }, [sheet])

    const handleSubmit = (event) => {
        event.preventDefault();

        if(currentId){
            dispatch(updateSheet(currentId, sheetData));
        } else {
            dispatch(createSheet(sheetData));
        }
        clear();
    }
    
    const clear = () => {
        setCurrentId(null);
        setSheetData({
            name: '',
            description: '',
            profession: '',
            creator: '',
            age: '',
            home: '',
            isPublic: false,
            SelectedFile: '',
            tags: ''
        });
    }
    
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a sheet</Typography>
                <TextField 
                    name="creator" 
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={sheetData.creator}
                    onChange={(event) => setSheetData({ ...sheetData, creator: event.target.value })}/>
                
                <TextField 
                    name="name" 
                    variant="outlined"
                    label="Name"
                    fullWidth
                    value={sheetData.name}
                    onChange={(event) => setSheetData({ ...sheetData, name: event.target.value })}/>

                <TextField 
                    name="profession" 
                    variant="outlined"
                    label="Profession"
                    fullWidth
                    value={sheetData.profession}
                    onChange={(event) => setSheetData({ ...sheetData, profession: event.target.value })}/>
                
                <TextField 
                    name="age" 
                    variant="outlined"
                    label="Age"
                    fullWidth
                    value={sheetData.age}
                    onChange={(event) => setSheetData({ ...sheetData, age: event.target.value })}/>
                
                <TextField 
                    name="home" 
                    variant="outlined"
                    label="Home"
                    fullWidth
                    value={sheetData.home}
                    onChange={(event) => setSheetData({ ...sheetData, home: event.target.value })}/>
                
                <TextField 
                    name="description" 
                    variant="outlined"
                    label="Description"
                    fullWidth
                    value={sheetData.description}
                    onChange={(event) => setSheetData({ ...sheetData, description: event.target.value })}/>

                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={sheetData.tags}
                    onChange={(event) => setSheetData({ ...sheetData, tags: event.target.value.split(',')})}
                    />
                
                {<div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setSheetData({...sheetData, SelectedFile: base64})}
                    />
                </div>}

                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper> 
    )
}

export default Form;