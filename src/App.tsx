import GlobalStyle from './styles/GlobalStyle';

import { Header } from './components';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header
        url={require('./assets/bg-desktop-dark.jpg')}
      />
    
    </div>
  );
}

export default App;
