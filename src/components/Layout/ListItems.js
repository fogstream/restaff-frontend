import React from 'react';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LayersIcon from '@material-ui/icons/Layers';

import { routes as expertRoutes } from '../../routes/expert'

const mapLinksWithType = {
  'expert': expertRoutes
}


export const ListItems = ({ type }) => {
  const links = mapLinksWithType[type]

  if (!links) {
    return
  }

  return (
    <div>
      {
        links.map(link => {
          const Icon = link.icon || LayersIcon
          return (
            <ListItem key={link.key} button>
              <Link to={link.path}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={link.title} />
              </Link>
          </ListItem>
        )        })
        }    
    </div>
);
}
