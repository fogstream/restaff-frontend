import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Grid} from '@material-ui/core'

import { MyContext } from '../../../App.js'

const useStyles = makeStyles(theme => ({
  root: {
    overflowX: 'auto',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
  tableFooter: {
    display:'flex',
    justifyContent: 'center',
  },
  link: {
    width: '100%'
  }
}));

function createData(name, position, id) {
  return { name, position, id };
}

const rows = [
  createData('Виктор Ди', 'Python development', '1'),
  createData('Виктор Ан', 'Конькобежец', '2'),
  createData('Виктор Цой', 'Умер', '3'),
];

export default function SimpleTable() {
  const classes = useStyles();
  const state = React.useContext(MyContext)
  console.log(state)

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="right">ФИО</TableCell>
            <TableCell align="right">Текущая должность</TableCell>
            <TableCell align="right">Направление реквалификации</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right"><Link to={`/padawan/${row.id}`} >Перейти</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid key='all' className={classes.tableFooter}>
        <TableCell align="center" xs={12}>
          <Link to={`/padawans`} className={classes.linkCell}>
            Все падаваны
          </Link>
        </TableCell>
      </Grid>
    </Paper>
  );
}