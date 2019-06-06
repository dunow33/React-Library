import React from 'react';
import Home from '../components/00_home';
import Components from '../components/00.5_components';
import FunctionalComponent from '../components/01_functional_component';
import FatArrow from '../components/02_fat_arrow';
import Header from '../components/02_header';
import ClassComponent from '../components/03_class_component';
import JSXRules from '../components/04_jsx';
import Props from '../components/04_props_advanced';
import PropsApp from '../components/props/PropsApp';
import State from '../components/05_state';
import IncrementButton from '../components/IncrementButton';
import Clock from '../components/clock';
import SetState from '../components/06_setState';
import Constructor from '../components/07_constructor';
import ToDoApp from '../components/todo';
import Timer from '../components/timer';
import Video from '../components/video/video';
import Comment from '../components/comment';
import FriendForm from '../components/axios_post_request';
import Footer from '../components/07_footer';
import Child from '../components/props_work/Child';
import Parent from '../components/props_work/Parent';

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
  },
  {
    path: '/functionalcomponent',
    sidebar: () => <div>Functional Component</div>,
    main: () => <FunctionalComponent />
  },
  {
    path: '/fatarrow',
    sidebar: () => <div>Fat Arrow</div>,
    main: () => <FatArrow />
  },
  {
    path: '/classcomponent',
    sidebar: () => <div>Class Component</div>,
    main: () => <ClassComponent />
  },
  {
    path: '/jsx',
    sidebar: () => <div>JSX</div>,
    main: () => <JSXRules />
  },
  {
    path: '/props',
    sidebar: () => <div>Props</div>,
    main: () => <Props />
  },
  {
    path: '/propssimpledemo',
    sidebar: () => <div>Props Simple Demo</div>,
    main: () => <PropsApp />
  },
  {
    path: '/state',
    sidebar: () => <div>State</div>,
    main: () => <State />
  },
  {
    path: '/setState',
    sidebar: () => <div>setState</div>,
    main: () => <SetState />
  },
  {
    path: '/constructor',
    sidebar: () => <div>Constructor</div>,
    main: () => <Constructor />
  },
  {
    path: '/video',
    sidebar: () => <div>Video</div>,
    main: () => <Video />
  },
  {
    path: '/IncrementButton',
    sidebar: () => <div>IncrementButton</div>,
    main: () => <IncrementButton />
  },
  {
    path: '/clock',
    sidebar: () => <div>Clock</div>,
    main: () => <Clock />
  },
  {
    path: '/todo',
    sidebar: () => <div>To Do</div>,
    main: () => <ToDoApp />
  },
  {
    path: '/timer',
    sidebar: () => <div>Timer</div>,
    main: () => <Timer />
  },
  {
    path: '/comment',
    sidebar: () => <div>Comment</div>,
    main: () => <Comment />
  },
  {
    path: '/friendform',
    sidebar: () => <div>HTTP Requests</div>,
    main: () => <FriendForm />
  },
  {
    path: '/names',
    sidebar: () => <div>Names and Props </div>,
    main: () => <Parent />
  },
]
