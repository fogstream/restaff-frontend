import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    padding: `0 ${theme.spacing(3)}px`
  },
  table: {
    marginTop: theme.spacing(5),
    minWidth: 650,
  },
  select: {
      width: '100%',
  },
  stepperTitle: {
    marginTop: theme.spacing(2)
  },
  margin: {
    margin: theme.spacing(1),
  },
  stepper: {
    width: '100%',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3),
    },
    backgroundColor: 'transparent',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: 'auto calc(50% - 200px)',
  },
  modalField: {
    marginTop: theme.spacing(3)
  },
  buttonGroup: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between'
  },
  checklistHeader: { display: 'flex', padding: 20}
}));


export default function AddressForm() {
  const classes = useStyles();
   const [values, setValues] = React.useState({
    vacation: '',
    workerNumber: '',
    description: '',
    checklist: [],
  });
  const [isOpen, setOpen] = React.useState(false)
  const [modalValues, setModalValues] = React.useState({
    isCheckpoint: false,
    tagName: '',
    tagValue: '',
    newPosition: '',
  })

  const handleOpen = React.useCallback(() => {
    setOpen(true);
  }, [])

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, [])

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleModalSelectChange= event => {
    setModalValues(oldValues => ({
      ...oldValues,
      tagName: event.target.name,
      tagValue: event.target.value
    }));
  };

  const handleCheck = () => {
    setModalValues(oldValues => ({
      ...oldValues,
      isCheckpoint: !oldValues.isCheckpoint
    }))
  }

  const handleApply = () => {
     setValues(oldValues => ({
       ...oldValues,
       isCheckpoint: modalValues.isCheckpoint,
       checklist: [
         ...oldValues.checklist, 
          {
           key: modalValues.tagName, 
           label: modalValues.newPosition,
           tag: modalValues.tagValue
          }
        ],
     }))

     setModalValues({})
     handleClose()
  }
  console.log(values)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
        <InputLabel htmlFor="type_vacation">Тип вакансии</InputLabel>
        <Select
          className={classes.select}
          value={values.vacation}
          onChange={handleChange}
          inputProps={{
            name: 'vacation',
            id: 'vacation',
          }}
        >
          <MenuItem value={"python"}>Питонист</MenuItem>
          <MenuItem value={"front"}>Фронт</MenuItem>
          <MenuItem value={"qa"}>Тестировщик</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="workerNumber"
            name="workerNumber"
            label="Необходимое число рабочих"
            fullWidth
            onChange={event => setValues({ ...values, workerNumber: event.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label="Описание вакансии"
            fullWidth
            onChange={event => setValues({ ...values, description: event.target.value})}
          />
        </Grid>
        <Grid xs={12}>
          <div className={classes.checklistHeader} >
            <Typography className={classes.stepperTitle}>Чек-лист навыков</Typography>
            <Fab size="small" color="primary" aria-label="add" className={classes.margin} onClick={handleOpen}>
              <AddIcon />
            </Fab>
          </div>
          <Stepper className={classes.stepper} orientation="vertical">
            {values.checklist.map(({ label }) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12} align="right">
        <Button variant="contained" color="primary" className={classes.button}>
            Отправить
        </Button>
        </Grid>
    </Grid>
    <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Добавить новуй шаг</h2>
          <Grid xs={12} className={classes.modalField}>
              <TextField
                id="newPosition"
                name="newPosition"
                label="Название cущности"
                fullWidth
                onChange={(event) => setModalValues({newPosition: event.target.value})}
              />
          </Grid>
          <Grid xs={12} className={classes.modalField}>
            <InputLabel htmlFor="type_vacation">Тэг</InputLabel>
            <Select
              className={classes.select}
              value={modalValues.tagValue}
              onChange={handleModalSelectChange}
              inputProps={{
                name: 'tagValue',
                id: 'tagValue',
              }}
            >
              <MenuItem value={"python"}>Питонист</MenuItem>
              <MenuItem value={"front"}>Фронт</MenuItem>
              <MenuItem value={"qa"}>Тестировщик</MenuItem>
            </Select>
        </Grid>
        <Grid xs={12} className={classes.modalField} >
           <FormControlLabel
              control={
                <Checkbox checked={modalValues.isCheckpoint} onChange={handleCheck} value="isCheckpoint" color="primary" />
              }
              label="Контрольная точка"
            />
        </Grid>
        <Grid item xs={12} className={classes.buttonGroup}>
          <Button variant="contained" color="secondary" onClick={handleClose}>
             Отмена
          </Button>
          <Button variant="contained" color="primary" onClick={handleApply}>
            Сохранить
          </Button>
        </Grid>
        </div>
      </Modal>
    </div>
  );
}