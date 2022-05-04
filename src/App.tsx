import GlobalStyle from './styles/GlobalStyle';

import { 
  Background,
  Main,
  Title
} from './components';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Background
        url={require('./assets/bg-desktop-dark.jpg')}
      />
      <Main>
        
      </Main>
    </div>
  );
}

export default App;
