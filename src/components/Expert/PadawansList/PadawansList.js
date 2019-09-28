import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';
import LinearProgress from '@material-ui/core/LinearProgress';

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

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {
          employees.map((emp, idx) => (
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
                {idx < employees.length && <Divider variant="inset" component="li" />}
          </Link>
          ))
      }
      
    </List>
  );
}