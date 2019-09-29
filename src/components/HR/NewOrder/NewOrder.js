import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      borderRadius: theme.spacing(2),
      padding: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column'
  },
  stepper: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    width: '200px',
    height: theme.spacing(5) ,
    alignSelf: 'flex-end',
  }
}));

const steps = [
  {
    key:1,
    label: 'Shipping address'
  },
  {
    key:2,
    label: 'Payment details'
  },
  {
    key:3,
    label: 'Review your order'
  },
];

const NewOrder = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Typography>Виктор Ваганыч</Typography>
            <Typography>10</Typography>
            <Typography>Описание</Typography>
             <Stepper activeStep={1} className={classes.stepper} orientation="vertical">
                {steps.map(({ label }) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
        </Stepper>
        <Button variant="contained" color="primary" className={classes.button}>
            Создать спрос
        </Button>
        </Paper>
    )
}

export default NewOrder;