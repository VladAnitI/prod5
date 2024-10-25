import { create } from 'zustand'

const useNoteStore = create((set, get) => ({
	notes: [],
	getAllNotes: () => {
		return get().notes
	},
	addNote: newNote => {
		set(state => ({ notes: [...state.notes, newNote] }))
	},
	setNotes: newNotesArr => {
		set(() => ({notes: [...newNotesArr]}))
	},
	thisNote: {},
	setThisNote: tNote => {
		set(() => ({thisNote: tNote}))
	},
	editM: false,
	setEditM: ed => {
		set(() => ({editM: ed}))
	}
}))

export default useNoteStore