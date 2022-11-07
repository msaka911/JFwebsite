import { Fragment } from 'react';
import Footer from './Footer';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import Background from './Background';

const Layout = (props) => {
  return (
    <Fragment>
      <Background/>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer/>
    </Fragment>
  );
};

export default Layout;
