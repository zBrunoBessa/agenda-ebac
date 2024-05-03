import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid white;
  align-items: center;
  padding-bottom: 5px;
`
export const NameArea = styled.input`
  width: 25%;
  padding: 6px;
  border-radius: 4px;
  border: none;
`
export const EmailArea = styled.input`
  width: 25%;
  padding: 6px;
  border-radius: 4px;
  border: none;
`
export const CelArea = styled.input`
  width: 20%;
  padding: 6px;
  border-radius: 4px;
  border: none;
`
export const Botao = styled.button`
  width: 80px;
  height: 30px;
  margin-right: 10px;
  background-color: #2a73f2;
  color: aliceblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
