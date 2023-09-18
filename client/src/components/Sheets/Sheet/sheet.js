import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import moment from 'moment';

import useStyles from "./styles";
import defaultPicture from "../../../images/defaultPicture.png";

import { useDispatch } from 'react-redux';
import { deleteSheet, likeSheet } from '../../../actions/sheets';

const Sheet = ({_sheet, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return(
        <Card className={classes.Card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={!_sheet?.selectedFile ? defaultPicture : _sheet.selectedFile} 
                    title={_sheet.name}
                />
                <div className={classes.overlay}>
                    <Typography variant="h6"> {_sheet.name} </Typography>
                    <Typography variant="body2"> {moment(_sheet.createdAt).fromNow()} </Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button
                        style={{color: 'orange'}}
                        size="small"
                        onClick={() => { setCurrentId(_sheet._id) }}
                    >
                        <MoreHorizIcon fontSize="default"/>
                    </Button>
                </div>
                <div className={classes.detail}>
                    <Typography variant="body2" color="textSecondary">{_sheet.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" className={classes.title}>
                        {_sheet.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.CardActions}>
                    <Button size="small" color="primary" onClick={()=>dispatch(likeSheet(_sheet._id))}>
                        <ThumbUpAltIcon fontSize="small"/>
                        &nbsp; Likes: &nbsp;
                        {_sheet.likeCount}
                    </Button>
                    <Button size="small" color="primary" onClick={()=>dispatch(deleteSheet(_sheet._id))}>
                        <DeleteIcon fontSize="small"/>
                        Delete
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default Sheet;