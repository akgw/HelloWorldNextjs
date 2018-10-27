import React from 'react';
import { Store } from 'redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import MyStore, { RootState } from '../store';

interface Props {
  store: Store<RootState>;
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(MyStore)(MyApp);
