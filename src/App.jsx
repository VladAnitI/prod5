import styles from './App.module.css';
import cn from 'classnames';
import useThemeStore from './components/store/themeStore';
import Theme from './components/theme/Theme';
import Form from './components/form/Form';
import JournalList from './components/journalList/JournalList';
import { BsJournalBookmark } from "react-icons/bs";

function App() {
  const { theme } = useThemeStore();

  return (
    <>
      <div className={cn(styles['wrapper'], [styles[theme]])}>
				<header className={cn(styles['header'])}>
					<h1><BsJournalBookmark /> My Journal</h1>
					<Theme />
				</header>
				<div className={cn(styles['container'])}>
					<JournalList />
          <Form />
				</div>
			</div>
    </>
  )
}

export default App
