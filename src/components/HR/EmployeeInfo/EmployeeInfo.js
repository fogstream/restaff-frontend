import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  success: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

export default function Checkout({ id }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepClick = (key) => {
    const currentPosition = steps.findIndex(el => el.key === key)

    if (currentPosition < steps.length) {
      setActiveStep(currentPosition + 1);
      return
    }

  };


  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Typography component="h1" variant="h4" align="center">
          Отметки прогресса
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper} orientation="vertical">
          {steps.map(({label, key}) => (
            <Step key={label} onClick={() => handleStepClick(key)}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length && (
            <div className={classes.success}>
              <CheckCircleIcon color='primary'/>
              <Typography variant="h5">
                Вы успешно завершили переобучение
              </Typography>
            </div>
          )}
        </React.Fragment>
      </main>
    </React.Fragment>
  );
}