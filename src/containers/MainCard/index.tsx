import FilterCard from '../../components/FilterCard'
import SaveCard from '../../components/SaveCard'
import ContactList from '../ContactList'
import { MainContainer } from './styles'

const MainCard = () => {
  return (
    <MainContainer>
      <h1>Agenda</h1>
      <FilterCard />
      <h1>Adicionar novo contato</h1>
      <SaveCard />
      <h1>Lista de contatos</h1>
      <ContactList />
    </MainContainer>
  )
}

export default MainCard
