import { useState, useRef, useEffect } from 'react';
import styles from './Form.module.css';
import cn from 'classnames';
import Modal from 'react-modal';
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { LuScrollText } from "react-icons/lu";
import useThemeStore from '../store/themeStore';
import useNoteStore from '../store/noteStore';
import { v4 as uuidv4 } from 'uuid';

Modal.setAppElement('#root');

const Form = () => {
    const { theme } = useThemeStore();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [emotion, setEmotion] = useState('');
    const [isEmotionCorrect, setIsEmotionCorrect] = useState('');
    const [title, setTitle] = useState('');
    const [isTitleCorrect, setIsTitleCorrect] = useState('');
    const titleFocus = useRef(null);
    const [date, setDate] = useState('');
    const [isDateCorrect, setIsDateCorrect] = useState('');
    const dateFocus = useRef(null);
    const [text, setText] = useState('');
    const [isTextCorrect, setIsTextCorrect] = useState('');
    const textFocus = useRef(null);

    const emotions = ['😀', '😢', '😡', '😍', '😎'];

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const clear = () => {
        setDate('')
        setEmotion('')
        setText('')
        setTitle('')
        setIsEmotionCorrect('');
        setIsDateCorrect('');
        setIsTitleCorrect('');
        setIsTextCorrect('');
    }

    const chooseEmotion = (em) => {
        setEmotion(em)
        closeModal();
    };

    const chooseTitle = (e) => setTitle(e.target.value)

    const chooseDate = (e) => setDate(e.target.value)

    const chooseText = (e) => setText(e.target.value)

    const checkEmotionCorrect = (value) => {
        if (value == '') {
            setIsEmotionCorrect('noneCorrect');
            return false
        }
        setIsEmotionCorrect('');
        return true
    }

    const checkDataCorrect = (value) => {
        if (value == '') {
            setIsDateCorrect('noneCorrect');
            dateFocus.current.focus();
            return false
        }
        setIsEmotionCorrect('');
        return true
    }

    const checkTitleCorrect = (value) => {
        if (value == '') {
            setIsTitleCorrect('noneCorrect');
            titleFocus.current.focus();
            return false
        }
        setIsEmotionCorrect('');
        return true
    }

    const checkTextCorrect = (value) => {
        if (value == '') {
            setIsTextCorrect('noneCorrect');
            textFocus.current.focus();
            return false
        }
        setIsEmotionCorrect('');
        return true
    }

    const save = (e) => {
        e.preventDefault()
        let check1 = checkEmotionCorrect(emotion);
        let check2 = checkDataCorrect(date);
        let check3 = checkTextCorrect(text);
        let check4 = checkTitleCorrect(title);
        if (check1 && check2 && check3 && check4) {
            if (editM) {
                let arr = getAllNotes();
                let newArr = arr.map((note) => {
                    return (
                        (note.id === thisNote.id)
                            ? {
                                title: title,
                                emotion: emotion,
                                date: date,
                                text: text,
                                id: note.id
                            }
                            : { ...note }
                    )
                })
                setNotes(newArr);
                setEditM(false);
                clear();
            } else {
                const note = {
                    title: title,
                    emotion: emotion,
                    date: date,
                    text: text,
                    id: uuidv4()
                }
                addNote(note);
                clear();
            }
        }
        setEditM(false)
    }

    const edit = (editingNote) => {

        setEmotion(editingNote.emotion);
        setTitle(editingNote.title);
        setDate(editingNote.date);
        setText(editingNote.text);
    }

    const { addNote, thisNote, getAllNotes, setNotes, editM, setEditM } = useNoteStore()

    useEffect(() => {
        setEditM(editM);
        if(editM) edit(thisNote);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editM, thisNote]);

    return (
        <>
            <div className={cn(styles['main'])}>
                <form className={cn(styles['form-wrapper'])}>
                    <div className={cn(styles['title'])}>
                        <span><IoDocumentTextOutline className={cn(styles['iconFont'])} /> Название: </span>
                        <input type="text" ref={titleFocus} value={title} onChange={e => chooseTitle(e)} placeholder='Укажите название воспоминания' className={cn(styles['tInput'], styles[theme], styles[isTitleCorrect])} />
                    </div>
                    <div className={cn(styles['title'])}>

                        <span><MdOutlineEmojiEmotions className={cn(styles['iconFont'])} /> Настроение: </span>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Выбор эмоции"
                            style={{
                                content: {
                                    top: '50%',
                                    left: '50%',
                                    right: 'auto',
                                    bottom: 'auto',
                                    marginRight: '-50%',
                                    transform: 'translate(-50%, -50%)',
                                },
                            }}
                        >
                            <h2>Выберите эмоцию</h2>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {emotions.map((emotion) => (
                                    <button
                                        key={emotion}
                                        onClick={() => { chooseEmotion(emotion) }}
                                        style={{ fontSize: '2rem' }}
                                    >
                                        {emotion}
                                    </button>
                                ))}
                            </div>
                        </Modal>
                        <input type="text" value={emotion} onClick={openModal} readOnly placeholder='Нажмите, чтобы выбрать настроение' className={cn(styles['tInput'], styles[theme], styles[isEmotionCorrect])} />
                    </div>
                    <div className={cn(styles['title'])}>
                        <span><CiCalendarDate className={cn(styles['iconFont'])} /> Дата: </span>
                        <input type="date" ref={dateFocus} onChange={e => { chooseDate(e) }} placeholder='ДД.ММ.ГГГГ' value={date} className={cn(styles['tInput'], styles[theme], styles[isDateCorrect])} />
                    </div>
                    <div className={cn(styles['title', styles['textarea']])}>
                        <span><LuScrollText className={cn(styles['iconFont'])} /> Описание: </span>
                        <textarea name="description" ref={textFocus} value={text} onChange={e => { chooseText(e) }} placeholder='Расскажите о своем дне...' id="desc" className={cn(styles['textarea'], styles[isTextCorrect])}></textarea>
                    </div>
                    <div onClick={e => {
                        save(e)
                    }} className={cn(styles['button'], styles[theme])}>Сохранить</div>
                </form>
            </div>
        </>
    )
}

export default Form;