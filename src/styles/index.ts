import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    input:disabled {
  color: inherit; /* Mantém a cor do texto padrão */
  background-color: transparent; /* Remove a cor de fundo */
}
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111;
  color: #fff;
  padding: 40px;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`

export default EstiloGlobal
