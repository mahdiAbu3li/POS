import React from 'react'
import styles, { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    formContainer:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column',

        
    },
    root:{
        borderRadius:"50%",
        color:"red"
    }
})
function Form() {
    const styles = useStyles();
    return (
        <div className={styles.formContainer}>
            <h3>Login To Your Account</h3>
            <TextField id="userName" label="User Name" variant="filled" classes={{root:styles.root}} ></TextField>
            <TextField id="password" label="Password" type="password" variant="filled"></TextField>
            <Button variant="outlined" >Login</Button>
            <span style={{marginLeft:'4rem'}}>&#169; 2020 </span>
        </div>
    )
}

export default Form
