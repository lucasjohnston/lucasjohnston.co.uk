import * as React from 'react'
import { InternalLink } from '../components/style'
import '../index.css'

const NotFoundPage = () => (
  <div style={{margin: '2em'}}>
    <h1>sorry!</h1>
    <p>
      that page doesn&#39;t exist yet
      <br />
      <span style={{paddingLeft: '3em'}}>:</span><span style={{paddingLeft: '1em'}}>(</span>
      <br /><br />
      <InternalLink href='/'>→ go home</InternalLink>
    </p>
  </div>
)

export default NotFoundPage
