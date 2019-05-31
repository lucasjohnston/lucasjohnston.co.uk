// @flow
import * as React from 'react'

type Props = {
  children?: React.Node,
}

type State = {
  theme: string,
  changeTheme: Function,
}

export const ThemeContext = React.createContext<*>()

class ThemeProvider extends React.Component<Props, State> {
  state = {
    theme: 'light',
    changeTheme: () => {
      this.setState(state => {
        return {
          theme: state.theme === 'light' ? 'dark' : 'light',
        }
      })
    },
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
