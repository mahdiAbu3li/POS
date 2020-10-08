import React from 'react'
import { Grid , Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    container : {
        marginTop:"25vh",
        backgroundColor:"lightblue"
    }
});

function LoginPage() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.container} >
                <Grid item xs={3} sm={2}></Grid>
               <Grid item xs={6} sm={8}>
                    <Paper elevation={3} >mahdi</Paper>
                    
               </Grid>
                <Grid item xs={3} sm={2}></Grid>
            </Grid>
        </div>
    )
}

export default LoginPage
