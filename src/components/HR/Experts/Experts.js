import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';

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

const experts = [
  {
    id: '1',
    name: 'John',
  },
  {
    id: '2',
    name: 'David',
  },
  {
    id: '3',
    name: 'Dima',
  },
]

const Experts = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {
        experts.map((expert, idx) => (
              <Link to={`/expert/${expert.id}`} className={classes.link}>
                <ListItem alignItems="center" key={expert.id} className={classes.item} button>
                    <ListItemAvatar>
                        {expert.avatar || <Avatar className={classes.orangeAvatar}>N</Avatar>}
                    </ListItemAvatar>
                    <ListItemText primary={expert.name} />
                </ListItem>
                {idx < experts.length && <Divider variant="inset" component="li" />}
          </Link>
          ))
      }
    </List>
  );
}

export default Experts;