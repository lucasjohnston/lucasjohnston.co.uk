const ReactGA = require('react-ga')

ReactGA.initialize(`UA-137041787-2`)
ReactGA.set({
  appName: 'lucasjohnston'
})

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname)
}