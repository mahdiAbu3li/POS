import React from 'react'
import { Container, Grid , Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import background from '../../images/5.png'
import styles from './LoginPage.module.css'
import Form from '../formLogin/form'

const useStyles = makeStyles({
  root:{
    backgroundColor:'white',
    padding:'1rem',
    display:'flex',
    justifyContent:'center',
    justifyItems:'space-between'

  }
});

function LoginPage() {
    const classes = useStyles();
    return (
        <div>

       <div className={styles.container}>
         
        <div className={styles.container__leftPanel}>
          <h1>POS PROJECT</h1>          
          <img src={require('../../images/6.svg')} style={{width:"45vw" , marginLeft:"2rem"}} />
         
        </div>
        <div className={styles.container__rightPanel}>
          <Paper elevation={3} classes={{root:classes.root}} className={styles.container__rightPanel__paper}>
              <Form />
          </Paper>
        </div>
       </div>
        </div>

    )
}

export default LoginPage
