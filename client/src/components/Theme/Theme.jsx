import cn from 'classnames'
import useThemeStore from '../../store/themeStore'
import styles from './Theme.module.css'

const Theme = () => {
	const { theme, setTheme } = useThemeStore()

	const themeToggle = () => {
		console.log(theme)
		if (theme === 'white') setTheme('dark')
		if (theme === 'dark') setTheme('white')
	}

	return (
		<div className={cn(styles['theme-container'])} onClick={themeToggle}>
			<div
				className={cn(styles['theme-toggler'], { [styles['active']]: theme === 'dark' })}
			></div>
		</div>
	)
}

export default Theme
