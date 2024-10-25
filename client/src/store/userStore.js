import { create } from 'zustand'

const useUserStore = create((set, get) => ({
	users: [],
	getAllUsers: () => {
		return get().users
	},
	addUser: newUser => {
		set(state => ({ users: [...state.users, newUser] }))
	}
}))

export default useUserStore
