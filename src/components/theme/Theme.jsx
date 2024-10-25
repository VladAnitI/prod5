import styles from './Theme.module.css';
import cn from 'classnames';
import useThemeStore from '../store/themeStore';

const Theme = () => {
    const { theme, setTheme } = useThemeStore()

	const themeToggle = () => {
		if (theme === 'white') setTheme('dark')
		if (theme === 'dark') setTheme('white')
	}

	return (
		<div className={cn(styles['theme-container'], [styles[theme]])} onClick={themeToggle}>
			<div
				className={cn(styles['theme-toggler'], [styles[theme]], { [styles['active']]: theme === 'dark' })}
			></div>
		</div>
	)
}

export default Theme