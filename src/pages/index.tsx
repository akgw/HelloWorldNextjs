import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';

class Index extends React.Component {
  // static getInitialProps({reduxStore, req}) {
  //
  //   return {}
  // }

  render() {
    return (
      <Layout>
        <p>Hello Next.js</p>
      </Layout>
    );
  }
}

export default connect()(Index);
