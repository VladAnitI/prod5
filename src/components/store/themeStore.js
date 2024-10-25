import { create } from 'zustand'

const useThemeStore = create(set => ({
	theme: 'white',
	setTheme: theme => set({ theme: theme }),
	activeNote: false,
	setActiveNote: bool => {
		set(() => ({activeNote: bool}))
	}
}))

export default useThemeStore
