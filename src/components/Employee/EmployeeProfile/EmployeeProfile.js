import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import WorkIcon from '@material-ui/icons/Work';
import AddIcon from '@material-ui/icons/Add';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import EmployeeInfo from '../../HR/EmployeeInfo'
import { deepOrange } from '@material-ui/core/colors';

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
  profileName: {
    fontSize: 32,
  },
  root: {
    overflowX: 'auto',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    padding: theme.spacing(4),
    width: '100%'
  },
  item: {
      width: '100%',
  },
  inline: {
    display: 'inline',
  },
  orangeAvatar: {
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
}));

const profileInfo = {
  name: 'Рита Емельянова',
  currentPosition: 'Бухгалтер',
  currentSalary: 40000,
  isRequalifying: true
}

const competencies = [
  'Математика', 
  'Программирование'
]

export default function ExpertInfo() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <List className={classes.head}>
        <ListItem alignItems="center">
          <ListItemAvatar>
            {profileInfo.avatar || <Avatar className={classes.orangeAvatar}>N</Avatar>}
          </ListItemAvatar>
          <ListItemText primary={profileInfo.name} classes={{primary: classes.profileName}} />
        </ListItem>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={profileInfo.currentPosition} secondary={`Оклад: ${profileInfo.currentSalary} руб.`} />
        </ListItem>
      </List>

      <Paper className={classes.root}>
        <List subheader={
          <ListSubheader component="div" id="nested-list-subheader">Актуальные компетенции</ListSubheader>
        }
        >
        {
            competencies.map((competency, idx) => (
              <>
                <ListItem alignItems="center" key={idx} className={classes.item}>
                  <ListItemText primary={competency} />
                  <ListItemSecondaryAction>
                    <IconButton className={classes.button} aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                {idx < competencies.length && <Divider variant="inset" component="li" />}
              </>
            ))
        }
        </List>
        <Button variant="contained" color="default" className={classes.button}>
          Добавить
         <AddIcon />
        </Button>
      </Paper>
    </React.Fragment>
  );
}