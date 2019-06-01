import React from 'react';
import Home from '../components/00_home';
import Components from '../components/00.5_components'

export const routes = [
  {
    path: '/' || '/home',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <Home />
  },
  {
  	path: '/components',
  	sidebar: () => <div>Components</div>,
  	main: () => <Components />
  }
]
