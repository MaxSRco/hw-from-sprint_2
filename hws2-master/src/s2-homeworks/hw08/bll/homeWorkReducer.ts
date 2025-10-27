import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      let newState = [...state]
      if (action.payload === 'up') {
        newState = newState.sort((a, b) => a.name.localeCompare(b.name))
      }
      if (action.payload === 'down') {
        newState = newState.sort((a, b) => b.name.localeCompare(a.name))
      }
      return newState // need to fix
    }
    case 'check': {
      let newState = [...state]
      return newState.filter(el => el.age > 18) // need to fix
    }
    default:
      return state
  }
}