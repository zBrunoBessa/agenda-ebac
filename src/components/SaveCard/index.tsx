import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  BotaoSaveCancelar,
  BotaoSaveCard,
  ContSave,
  NameInput,
  PhoneInput,
  SaveDiv
} from './styles'

import { cadastrar } from '../../store/reducers/contacts'

const SaveCard = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const saveContact = (event: FormEvent) => {
    event.preventDefault()

    if (name.length == 0 || (phone.length == 0 && email.length == 0)) {
      alert('Por favor preencha os campos corretamente.')
    } else {
      alert('Contato cadastrado com sucesso!')
      dispatch(
        cadastrar({
          name,
          email,
          phone
        })
      )
      setName('')
      setEmail('')
      setPhone('')
    }
  }
  const handlePhoneChange = (event: { target: { value: string } }) => {
    const inputPhone = event.target.value
    const numericPhone = inputPhone.replace(/\D/g, '')
    if (inputPhone.length <= 11) {
      setPhone(numericPhone)
    }
  }

  const handleClear = () => {
    setName('')
    setEmail('')
    setPhone('')
  }
  return (
    <ContSave>
      <SaveDiv onSubmit={saveContact}>
        <NameInput
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Nome"
        />
        <NameInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="E-mail"
        />
        <PhoneInput
          value={phone}
          onChange={(event) => handlePhoneChange(event)}
          type="text"
          placeholder="Telefone"
        />
        <BotaoSaveCard>Salvar</BotaoSaveCard>
        <BotaoSaveCancelar type="button" onClick={handleClear}>
          Limpar
        </BotaoSaveCancelar>
      </SaveDiv>
    </ContSave>
  )
}

export default SaveCard
