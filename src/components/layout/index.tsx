import Link from 'next/link';
import Header from './header';
import React from 'react';

interface Props {
  children: any;
}

export default class LayoutComponent extends React.Component<Props, any> {
  render() {
    return (
      <div>
        <Header title={'hoge'} />
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>

        {this.props.children}

        <footer>{'footer here'}</footer>
      </div>
    );
  }
}
