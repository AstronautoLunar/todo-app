import GlobalStyle from './styles/GlobalStyle';

import { 
  Background,
  ButtonIcon,
  ListTask,
  Main,
  Header,
  InputTask,
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
        <InputTask
          value=''
          modeDark={true}
          placeholder='Create a new todo...'
        />
        <ListTask
          data={[
            {
              id: '01',
              text: 'Lavar a louça',
              checked: true
            },
            {
              id: '02',
              text: 'Varrer a casa',
              checked: false
            },
            {
              id: '03',
              text: 'Lavar o banheiro',
              checked: false
            },
          ]}
        />
      </Main>
    </div>
  );
}

export default App;
