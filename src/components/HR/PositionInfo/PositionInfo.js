import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
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
    width: '100%',
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
}));

const expert = {
  id: 1,
  name: 'Dima',
}

const employees = [
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
      last_name: 'Vlad',
      first_name: 'Gamzikov',
      surname: 'Anreevich',
      position : {
        name: 'Front-end developer'
      },
      experience: 4,
    }
  }
]

export default function ExpertInfo() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <List className={classes.head}>
        <ListItem alignItems="center" key={expert.id} className={classes.item}>
            <ListItemAvatar>
                {expert.avatar || <Avatar className={classes.orangeAvatar}>N</Avatar>}
            </ListItemAvatar>
            <ListItemText primary={expert.name} />
        </ListItem>
      </List>

      <List className={classes.root} subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Заявки экспертов на должность
        </ListSubheader>
        }
      >
       {
          responses.map((response, idx) => (
            <>
              <ListItem alignItems="center" key={response.id} className={classes.item}>
              </ListItem>
              {idx < responses.length && <Divider variant="inset" component="li" />}
            </>
          ))
      }
      
      </List>
    </React.Fragment>
  );
}