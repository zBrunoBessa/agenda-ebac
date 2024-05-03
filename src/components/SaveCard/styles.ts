import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ContSave = styled.div`
  width: 100%;
  border-bottom: 2px solid aliceblue;
  padding-bottom: 20px;
  margin-bottom: 30px;
  margin-top: 10px;
`

export const SaveDiv = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const NameInput = styled.input`
  width: 300px;
  height: 40px;
  margin-right: 10px;
  border-radius: 8px;
  padding-left: 8px;
`

export const PhoneInput = styled.input`
  width: 200px;
  height: 40px;
  margin-right: 10px;
  border-radius: 8px;
  padding-left: 8px;
`

export const BotaoSaveCard = styled.button`
  width: 60px;
  height: 40px;
  background-color: green;
  border-radius: 8px;
  color: #fff;
  border: none;
  cursor: pointer;
`

export const BotaoSaveCancelar = styled(BotaoSaveCard)`
  margin-left: 10px;
  background-color: ${variaveis.vermelho};
`
