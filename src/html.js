import * as React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="lucas johnston is the 19 year old founder of umber."
        />
        <meta
          name="keywords"
          content="lucas, johnston, lucas johnston, umber, umber bank, umber money, teen bank, teen money app, gen-z app, gen-z bank, gen-z fintech, teen fintech, young person, young persons bank, young persons banking, young persons accounts, young person account, under 18 account, under 18 bank account, monzo, monzo bank, google, imperial, imperial college, starling, starling bank, software engineer, product manager, youngest engineer, youngest software engineer, 17 years old, 18 years old, 17 year old, 18 year old, programmer, young programmer, youngest programmer"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#91A798" />
        <meta httpEquiv="Cache-Control" content="max-age=200" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.lucasjohnston.co.uk/twitter_image.png"
        />
        <meta name="twitter:site" content="@lucasjohnston" />
        <meta name="twitter:creator" content="@lucasjohnston" />
        <meta name="twitter:title" content="lucas johnston" />
        <meta
          name="twitter:description"
          content="lucas johnston is the 19 year old founder of umber."
        />
        <meta property="og:url" content="https://www.lucasjohnston.co.uk" />
        <meta property="og:title" content="lucas johnston" />
        <meta
          property="og:description"
          content="lucas johnston is the 19 year old founder of umber."
        />
        <meta
          property="og:image"
          content="https://www.lucasjohnston.co.uk/twitter_image.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FBF8F3" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FBF8F3" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no"
        />
        <title>lucas johnston</title>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          hey! i'm @lucasjohnston.
          <br />
          good news: there's a fancy animation here!
          <br />
          bad news: you need javascript for it to work. and this site has lit
          nothing else on it.
          <br />
          <br />
          considering javascript is on virtually every device nowadays, you've
          probs specifically disabled it for 'security' or smth
          <br />
          either that or you're using a super old web browser. either way, we
          both know you're not enabling javascript for the sake of a pretty
          animation
          <br />
          feel free to follow me on twitter from your cli, and enjoy your
          non-javascript internet adventures!
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
