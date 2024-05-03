import { useDispatch, useSelector } from 'react-redux'
import { BotaoLimpar, CompHeader, Pesquisa } from './styles'
import { RootReducer } from '../../store'
import { changeTermo } from '../../store/reducers/filters'

const FilterCard = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filters)

  const HandleClear = () => {
    dispatch(changeTermo(''))
  }

  return (
    <CompHeader>
      <Pesquisa
        placeholder="Busca por contatos"
        value={termo}
        onChange={(event) => dispatch(changeTermo(event.target.value))}
      />
      <BotaoLimpar onClick={HandleClear}>Limpar</BotaoLimpar>
    </CompHeader>
  )
}

export default FilterCard
