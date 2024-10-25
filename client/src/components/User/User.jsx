import cn from 'classnames'
import PropTypes from 'react'
import styles from './User.module.css'

const User = ({ firstName, lastName, email }) => {
	return (
		<li className={cn(styles['user'])}>
			{firstName}
			{lastName}
			{email}
		</li>
	)
}

export default User

User.propTypes = {
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	email: PropTypes.string
}
