import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  dashboard: {
    display: 'flex',
  },
  root: {
    overflowX: 'auto',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    flex: 1,
  },
  table: {
    minWidth: 650,
  },
  tableFooter: {
    display:'flex',
    justifyContent: 'center',
  },
  link: {
    width: '100%',
    textDecoration: 'none',
    color: 'unset'
  },
  item: {
      width: '100%',
  },
  inline: {
    display: 'inline',
  },
  expert: {
      flex: 1,
  },
  count: {
    flex: 1.
  },
  position: {
      flex: 1.
  },
  cardHeader: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  listFailed: {
      display: 'flex',
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

const failed = [
    {
        name: 'Python',
        ratio: '3/6'
    },
    {
        name: 'JS',
        ratio: '7/8'
    },
    {
        name: 'GO',
        ratio: '11/7'
    },
]


export default function SimpleTable() {
  const classes = useStyles();

  return (
      <div className={classes.dashboard}>
    <Paper className={classes.root}>
    <Typography variant="body1" align="center" className={classes.cardHeader}>Запрашиваемые позиции</Typography>
      <List >
      {
          orders.map((emp, idx) => (
              <Link className={classes.link} to={`/new_order/${emp.id}`}>
                <ListItem alignItems="center" key={emp.key} className={classes.item}>
                    <ListItemText
                        className={classes.expert}
                        primary={emp.expertName}
                        alignItems="left"
                    />
                    <ListItemText
                        className={classes.position}
                        align="right"
                        primary={emp.neededPosition}
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
     <Paper className={classes.root}>
    <Typography variant="body1" align="center" className={classes.cardHeader}>Запрашиваемые позиции</Typography>
      <List>
      {
          failed.map((emp, idx) => (
              <Link className={classes.link}>
                <ListItem alignItems="center" key={emp.key} className={classes.item}>
                    <ListItemText
                        primary={emp.name}
                        alignItems="left"
                    />
                    <ListItemText
                        className={classes.position}
                        align="right"
                        primary={emp.ratio}
                    />
                </ListItem>
                {(idx + 1) < orders.length && <Divider component="li" />}
          </Link>
          ))
      }
    </List>
    </Paper>
    </div>
  );
}