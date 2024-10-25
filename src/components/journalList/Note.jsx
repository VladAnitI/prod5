import styles from './Note.module.css';
import cn from 'classnames';
import PropTypes, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import useNoteStore from '../store/noteStore';

const Note = ({ title, emotion, date, text, id }) => {
    const { setThisNote, notes, setNotes, editM, setEditM, activeNote, setActiveNote } = useNoteStore();
    const [active, setActive] = useState('');

    const deleteNote = (id) => {
        if (editM === false) {
            let newArr = [];
            notes.forEach(note => {
                if (note.id != id) {
                    newArr.push(note);
                }
            });
            setNotes(newArr)
            setEditM(false)
        } else {
            alert('Закончите редактировать')
        }
    }

    const editNote = (id) => {
        setActive('active');
        console.log(active)
        let editingNote = {};
        notes.forEach((note) => {
            if (note.id === id) editingNote = note
        })
        setThisNote(editingNote);
        setEditM(true)
        return
    }

    return (
        <li className={cn(styles['note'])}>
            <h1 className={cn(styles['title'], styles[active])} onClick={() => { editNote(id) }}>{emotion}  {title}</h1>
            <div className={cn(styles['text'])} onClick={() => { editNote(id) }}>{text} <br /><b>{date}</b></div>
            <MdDeleteForever onClick={() => { deleteNote(id) }} className={cn(styles['delete'])} />
        </li>
    )
}

export default Note;

Note.propTypes = {
    title: PropTypes.string,
    emotion: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.function
}