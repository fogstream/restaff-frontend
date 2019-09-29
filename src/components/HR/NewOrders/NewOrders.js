import React from 'react';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

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
  tableHeader: {
    paddingBottom: theme.spacing(3),
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


const NewOrders = () => {
    const classes = useStyles();
    return (
      <Paper className={classes.root}>
        <List >
          <ListItem alignItems="center" className={classes.item}>
              <ListSubheader alignItems="left" className={classes.expert}>Эксперт</ListSubheader>
              <ListSubheader align="right" className={classes.position}>Должность</ListSubheader>
              <ListSubheader align="right" className={classes.count}>Кол-во сотрудников</ListSubheader>
          </ListItem>
        {
            orders.map((emp, idx) => (
                <Link className={classes.link} to={`/new_order/${emp.id}`}>
                  <ListItem alignItems="center" key={emp.key} className={classes.item} button>
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
    )
}

export default NewOrders;