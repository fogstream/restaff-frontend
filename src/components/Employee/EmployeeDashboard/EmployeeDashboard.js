import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/List';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  dashboard: {
    display: 'flex',
    flexFlow: 'column'
  },
  root: {
    overflowX: 'auto',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    padding: theme.spacing(4),
    flex: 1,
  },
  currentRequirements: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    flex: 2
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

const notifications = [
    {
      vacancy: {
        id: 1,
        name: 'Python-разработчик',
        salary: 75000
      },
      expert: {
        id: 1,
        name: 'Dmitry Kotov'
      }
    },
]
const currentPositionInfo = {
  name: 'Бухгалтер',
  experience: 6,
  currentRequirements: [
    'Математика',
    'Программирование'
  ]
}


export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className={classes.dashboard}>
      <Paper className={[classes.root, classes.currentPosition]}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Должность: {currentPositionInfo.name}
        </Typography>
        <Typography component="p">Стаж: {currentPositionInfo.experience} лет</Typography>
        <List subheader={
          <ListSubheader component="div">
            Текущие компетенции
          </ListSubheader>
        } className={classes.currentRequirements}>
          {
            currentPositionInfo.currentRequirements.map((req, idx) => (
              <>
              <ListItem>
                <ListItemText
                  primary={req}
                  alignItems="left"
                />
              </ListItem>
              {(idx + 1) < currentPositionInfo.currentRequirements.length && <Divider component="li" />}
              </>
            ))
          }
        </List>
      </Paper>
      <Paper className={[classes.root, classes.notifications]}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Новые вакансии
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Должность</TableCell>
              <TableCell>Оклад</TableCell>
              <TableCell>Эксперт</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notifications.map((notification, idx) => (
              <TableRow key={idx}>
                <TableCell>{notification.vacancy.name}</TableCell>
                <TableCell>{notification.vacancy.salary}</TableCell>
                <TableCell>
                 <Link to={`/expert/${notification.expert.id}`} >
                  {notification.expert.name}
                 </Link>
                </TableCell>
                <TableCell align="right">
                  <Button component={Link} to={`/vacancy/${notification.vacancy.id}`} variant="contained" color="primary" className={classes.button}>
                    Подробнее
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}