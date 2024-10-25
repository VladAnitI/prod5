import cn from 'classnames'
import './App.module.css'
import styles from './App.module.css'
import Form from './components/Form/Form'
import Theme from './components/Theme/Theme'
import UserList from './components/UserList/UserList'
import useThemeStore from './store/themeStore'

function App() {
	const { theme } = useThemeStore()

	return (
		<>
			<div className={cn(styles['wrapper'], [styles[theme]])}>
				<header className={cn(styles['header'])}>
					<h1>USER LIST</h1>
					<Theme />
				</header>
				<div className={cn(styles['container'])}>
					<Form />
					<UserList />
				</div>
			</div>
		</>
	)
}

export default App