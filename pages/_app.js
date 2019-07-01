/* Preact */
import { h } from 'preact'

/* Redux */
import { Provider } from 'react-redux'
import store from 'stores/store'

/* Next */
import App, { Container } from 'next/app'

/* Utils */
import NProgress from "next-nprogress/component"

/* CSS */
import 'css/init.css'
import 'static/material-icons/material-icons.css'

/* Component */
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <NProgress color="#007aff" />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default MyApp;