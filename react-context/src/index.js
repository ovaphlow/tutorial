import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Login from './Login'
// import {ThemeContext, themes} from './theme-context';
import { themes } from './theme-context';
import ThemedButton from './themed-button';

//创建Context组件
const AppContext = React.createContext({
  theme: 'dark',
  toggle: () => {}, //向上下文设定一个回调方法
});

function Button() {
  return (
    <AppContext.Consumer>
      {({theme, toggle}) => (
        <button
          onClick={toggle} //调用回调
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </AppContext.Consumer>
  );
}

//中间组件
function Content() {
  return (
    <div>
      <Button />
    </div>
  );
}

const Home = props => (
  <div className="container-fluid">
    <h1>
      <i className="fa fa-fw fa-home"></i>
      11
    </h1>
  </div>
)

//运行APP
class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = () => { //设定toggle方法，会作为context参数传递
      console.info(this.state)
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggle: this.toggle,
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Navbar />

        <HashRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </div>
        </HashRouter>

        // state包含了toggle方法
        <Content />
      </AppContext.Provider>
    )
  }
}

// // 一个使用 ThemedButton 的中间组件
// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemedButton>
//   );
// }
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: themes.light,
//     };
//
//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:
//           state.theme === themes.dark
//             ? themes.light
//             : themes.dark,
//       }));
//     };
//   }
//
//   render() {
//     // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
//     // 而外部的组件使用默认的 theme 值
//     return (
//       <div>
//         <ThemeContext.Provider value={this.state.theme}>
//           <Toolbar changeTheme={this.toggleTheme} />
//         </ThemeContext.Provider>
//         <div>
//           <ThemedButton />
//         </div>
//       </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'));
