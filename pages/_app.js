import React from "react"
import App from "next/app"
import Styles, { breakingPoints } from "../components/Styles"
import NProgress from "nprogress"
import Router from "next/router"
import Nav from "../components/Nav"
import Layout from "../components/Layout"
import TopNav from "../components/TopNav"
import Head from 'next/head'

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta
              name="viewport"
              content="width=device-width,initial-scale=1.0"
          />
        </Head>
        {/* <Container> */}
        {/* CONTAINER HAS BEEN DEPRECATED */}
          <Layout>
            <Nav />
            <div
              css={{
                marginLeft: 240,
                width: "100%",
                [breakingPoints.md]: {
                  marginLeft: 0,
                },
              }}>
              <TopNav />
              <Component {...pageProps} />
            </div>
          </Layout>
          <Styles />
        {/* </Container> */}
      </>
    )
  }
}
