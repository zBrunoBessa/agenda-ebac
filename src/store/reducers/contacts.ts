import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      id: 1,
      name: 'Bruno',
      email: 'bruno@email.com',
      phone: '15996544232'
    },
    {
      id: 2,
      name: 'Ana',
      email: 'ana@email.com',
      phone: '24882565025'
    },
    {
      id: 3,
      name: 'Maria',
      email: 'maria@email.com',
      phone: '24981452365'
    },
    {
      id: 4,
      name: 'João',
      email: 'joao@email.com',
      phone: '12996545896'
    },
    {
      id: 5,
      name: 'Pedro',
      email: 'pedro@email.com',
      phone: '11984562314'
    },
    {
      id: 6,
      name: 'Juliana',
      email: 'juliana@email.com',
      phone: '21896547895'
    },
    {
      id: 7,
      name: 'Lucas',
      email: 'lucas@email.com',
      phone: '31974586259'
    },
    {
      id: 8,
      name: 'Carla',
      email: 'carla@email.com',
      phone: '41987563214'
    },
    {
      id: 9,
      name: 'Fernanda',
      email: 'fernanda@email.com',
      phone: '51896547895'
    },
    {
      id: 10,
      name: 'Ricardo',
      email: 'ricardo@email.com',
      phone: '61974563214'
    },
    {
      id: 11,
      name: 'Ana2',
      email: 'ana2@email.com',
      phone: '24582564025'
    },
    {
      id: 12,
      name: 'Bruno2',
      email: 'Bruno2@email.com',
      phone: '75782565025'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contact>) => {
      const indexContact = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContact >= 0) {
        state.itens[indexContact] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contact) => contact.phone === action.payload.phone
      )

      if (contatoJaExiste) {
        alert('Contato ja existe')
      } else {
        const lastContact = state.itens[state.itens.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contactsSlice.actions

export default contactsSlice.reducer
