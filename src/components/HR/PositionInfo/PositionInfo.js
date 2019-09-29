import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { deepOrange } from '@material-ui/core/colors';

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#64dd17', 0.8),
    width: '80px',
    borderRadius: 20,
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#64dd17',
  },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  head: {
    marginTop: theme.spacing(4),
    marginLeft: 'auto',
    marginRight: 'auto',
    flexFlow: 'column',
  },
  root: {
    overflowX: 'auto',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    flex: 1,
  },
  employeeName: {
    flex: 1
  },
  experience: {
    flex: 1
  },
  currentPosition: {
    flex:1
  },
  item: {
      width: '100%',
  },
  inline: {
    display: 'inline',
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  margin: {
    margin: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    color: 'unset'
  },
  buttonsContainer: {
    flex: 1
  }
}));

const orders = [
  {
      expertName: 'Viktor An',
      neededPosition: 'Python',
      count: 1,
      id: '123'
  },
  {
      expertName: 'Viktor Di',
      neededPosition: 'sberbank',
      count: 6,
      id: '321'
  },
  {
      expertName: 'Viktor Hoi',
      neededPosition: 'Punk Rock',
      count: 10,
      id: 'aaa'
  },
]
const activeEmployees = [
  {
    key: '1',
    name: 'John',
    skills: 'python, js, web',
    progress: 80,
    currentPosition: 'QA Automation',
  },
  {
      key: '2',
      name: 'Viktor',
      skills: 'qa, automation',
      progress: 30,
      currentPosition: 'Python',
  },
  {
      key: '3',
      name: 'Andrew',
      skills: 'python, js, go',
      progress: 20,
      currentPosition: 'Buissness analitycs',
  },
]
const responses = [
  {
    id: 1,
    employee: {
      last_name: 'Gamzikov',
      first_name: 'Vladislav',
      surname: 'Anreevich',
      position : {
        name: 'Бухгалтер'
      },
      experience: 4,
    }
  }
]

export default function PositionInfo() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.root}>
        <List className={classes.root} subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Заявки от сотрудников на переквалификацию в данную должность
          </ListSubheader>
        }
        >
        <ListItem alignItems="center" className={classes.item}>
          <ListItemText className={classes.employeeName} primary='Имя сотрудника' />
          <ListItemText className={classes.currentPosition} primary='Текущая должность' />
          <ListItemText className={classes.experience} primary='Стаж' />
          <ListItemSecondaryAction className={classes.buttonsContainer}></ListItemSecondaryAction>
        </ListItem>
        {
          responses.map((response, idx) => (
            <>
              <ListItem alignItems="center" key={response.id} className={classes.item}>
                <ListItemText className={classes.employeeName} primary={`${response.employee.last_name} ${response.employee.first_name} ${response.employee.surname}`} />
                <ListItemText className={classes.currentPosition} primary={response.employee.position.name} />
                <ListItemText className={classes.experience} primary={response.employee.experience} />
                <ListItemSecondaryAction className={classes.buttonsContainer}>
                <ButtonGroup
                  size="medium"
                  aria-label="control panel for response"
                >
                    <Button variant="contained" color="primary" className={classes.button}>
                      Принять
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button}>
                      Отклонить
                    </Button>
                  </ButtonGroup>
                </ListItemSecondaryAction>
              </ListItem>
              {idx < responses.length && <Divider variant="inset" component="li" />}
            </>
          ))
        }
        </List>
      </Paper>
      <Paper className={classes.root}>
        <List className={classes.root} subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Прогресс пререквалификации сотрудников в данную должность
          </ListSubheader>
        }
        >
        {
          activeEmployees.map((emp, idx) => (
              <Link to={`/padawan/${emp.key}`} className={classes.link}>
                <ListItem alignItems="center" key={emp.key} className={classes.item}>
                    <ListItemAvatar>
                        {emp.avatar || <Avatar className={classes.orangeAvatar}>N</Avatar>}
                    </ListItemAvatar>
                    <ListItemText
                        primary={`${emp.name} (${emp.currentPosition})`}
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {emp.skills}
                            </Typography>
                            </React.Fragment>
                        }
                    />
                    <BorderLinearProgress
                        className={classes.margin}
                        variant="determinate"
                        color="secondary"
                        value={emp.progress}
                    />
                </ListItem>
                {idx < activeEmployees.length && <Divider variant="inset" component="li" />}
          </Link>
          ))
        }
        </List>
      </Paper>
      <Paper className={classes.root}>
        <List className={classes.root} subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Заявки от экспертов на данную должность
          </ListSubheader>
        }
        >
        <ListItem alignItems="center" className={classes.item}>
          <ListItemText align="left" className={classes.expert} primary='Эксперт' />
          <ListItemText align="right"  className={classes.count} primary='Кол-во сотрудников' />
        </ListItem>
        {
          orders.map((emp, idx) => (
              <Link className={classes.link} to={`/new_order/${emp.id}`}>
                <ListItem alignItems="center" key={emp.key} className={classes.item} button>
                    <ListItemText
                        ListItemText align="left" 
                        className={classes.expert}
                        primary={emp.expertName}
                    />
                    <ListItemText
                        className={classes.count}
                        align="right"
                        primary={emp.count}
                    />
                </ListItem>
                {(idx + 1) < orders.length && <Divider component="li" />}
          </Link>
          ))
        }
        </List>
      </Paper>
    </React.Fragment>
  );
}