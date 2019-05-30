import React, {Fragment} from 'react';
import Header from '../../container/Header/Header';
import EmptyResults from '../../components/EmptyResults/EmptyResults';

const MainScreen = () => (
  <Fragment>
    <Header />
    <EmptyResults text="No films found" />
  </Fragment>
);

export default MainScreen;
