import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
}

export default class HeaderComponent extends React.Component<Props, any> {
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>
    );
  }
}
