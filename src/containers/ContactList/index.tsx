import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { List, TituloContatos } from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { termo } = useSelector((state: RootReducer) => state.filters)

  const contactsFilter = () => {
    return itens.filter(
      (item) => item.name.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }
  return (
    <>
      <TituloContatos>
        <div>
          <p>Nome</p>
          <p>Email</p>
          <p>Telefone</p>
        </div>
      </TituloContatos>
      <List>
        {contactsFilter().map((c) => (
          <li key={c.id}>
            <Contact id={c.id} name={c.name} email={c.email} phone={c.phone} />
          </li>
        ))}
      </List>
    </>
  )
}

export default ContactList
