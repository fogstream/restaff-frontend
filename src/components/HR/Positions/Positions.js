import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { deepOrange } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';


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

const positions = [
    {
      id: '1',
      name: 'Python developer',
    },
    {
      id: '2',
      name: 'Java developer',
    },
    {
      id: '3',
      name: 'Front-end developer',
    },
]

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="positions-search">Искать</InputLabel>
          <Input
            id="positions-search"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start"><Search color="disabled"/></InputAdornment>}
          />
        </FormControl>
      <List className={classes.root}>
      {
        positions.map((position, idx) => (
          <Link className={classes.link} to={`/position/${position.id}`}>
            <ListItem alignItems="center" key={position.key} className={classes.item} button>
              <ListItemText
                className={classes.position}
                primary={position.name}
                alignItems="left"
              />
            </ListItem>
            {(idx + 1) < positions.length && <Divider component="li" />}
          </Link>
        ))
      }
        
      </List>
    </div>
  );
}