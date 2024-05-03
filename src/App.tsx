import { Provider } from 'react-redux'
import MainCard from './containers/MainCard'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <MainCard />
      </Container>
    </Provider>
  )
}

export default App
