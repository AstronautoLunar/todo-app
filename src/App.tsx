import GlobalStyle from './styles/GlobalStyle';

import { 
  Background,
  ButtonIcon,
  Main,
  Header,
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
        <Header>
          <Title>TODO</Title>
          <ButtonIcon
            mode='light'
          />
        </Header>
        
      </Main>
    </div>
  );
}

export default App;
