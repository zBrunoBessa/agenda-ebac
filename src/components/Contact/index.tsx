import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contacts'
import * as S from './styles'

type Props = {
  id: number
  name: string
  email: string
  phone: string
}

const Contact = ({
  id,
  name: nameOriginal,
  email: emailOriginal,
  phone: phoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [phone, setPhone] = useState<string>('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nameOriginal.length > 0) {
      setName(nameOriginal)
      setPhone(`${phoneOriginal}`)
      setEmail(emailOriginal)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameOriginal])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhoneNumber = event.target.value
    const formattedPhoneNumber = inputPhoneNumber.replace(/\D/g, '') // Remove todos os caracteres não numéricos
    setPhone(formattedPhoneNumber)
  }

  function cancelarEdicao() {
    setEstaEditando(false)
    setPhone(`${phoneOriginal}`)
    setName(nameOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <S.NameArea
        disabled={!estaEditando}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <S.EmailArea
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.CelArea
        disabled={!estaEditando}
        value={phone}
        pattern="[0-9]*"
        onChange={handleChange}
      />

      <div>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    name,
                    email,
                    phone
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </div>
    </S.Card>
  )
}

export default Contact
