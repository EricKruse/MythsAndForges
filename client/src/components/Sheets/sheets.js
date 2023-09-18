import Sheet from "./Sheet/sheet.js";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import useStyles from "./styles"

const Sheets = ({setCurrentId}) => {
    const classes = useStyles();
    const sheetsObject = useSelector((state) => state); // State -> Payload -> Keyed Attributes including array
    const sheetsLength = Object.keys(sheetsObject).length; // Simple sheets.length doesnt work since { sheets:{[]}, ...}

    return(
        !sheetsLength ? <CircularProgress /> : (
            <Grid
                className={classes.container}
                container
                alignItems="stretch"
                spacing = {3}
            >
                {
                    sheetsObject.sheets.map((sheet) => (
                        <Grid
                            key={sheet._id}
                            xs={12}
                            sm={6}
                            item
                        >
                            <Sheet _sheet={sheet} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default Sheets;