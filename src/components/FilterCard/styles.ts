import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const CompHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid aliceblue;
  padding-bottom: 20px;
  margin-bottom: 30px;
  margin-top: 30px;
`

export const Pesquisa = styled.input`
  flex: 1;
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  margin-right: 10px;
`

export const BotaoLimpar = styled.button`
  width: 80px;
  height: 40px;
  font-size: 14px;
  background-color: ${variaveis.vermelho};
  border-radius: 8px;
  color: #fff;
  border: none;
  cursor: pointer;
`
