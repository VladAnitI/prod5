import styles from './JournalList.module.css';
import cn from 'classnames';
import Note from './Note';
import useNoteStore from '../store/noteStore';

const JournalList = () => {
    const { notes } = useNoteStore();

    return (
        <div className={cn(styles['wrapper'])}>
            <div className={cn(styles['button'])}>Новое воспоминание</div>
            <ul>
                {notes.map(note => {
                    return (
                        <Note key={note.id} id={note.id} title={note.title} emotion={note.emotion} date={note.date} text={note.text} />
                    )
                })}
            </ul>
        </div>
    )
}

export default JournalList;