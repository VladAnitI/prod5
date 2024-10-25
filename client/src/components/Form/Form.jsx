import cn from 'classnames'
import { useEffect, useState } from 'react'
import useUserStore from '../../store/userStore'
import styles from './Form.module.css'

const Form = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')

	const firstNameChangeHandler = e => {
		setFirstName(e.target.value)
	}

	const lastNameChangeHandler = e => {
		setLastName(e.target.value)
	}

	const emailChangeHandler = e => {
		setEmail(e.target.value)
	}

	const addNewUser = e => {
		e.preventDefault()
		const user = {
			firstName: firstName,
			lastName: lastName,
			email: email
		}

		addUser(user)
	}

	const { users, addUser } = useUserStore()

	useEffect(() => {
		console.log(users)
	}, [users])

	return (
		<form className={cn(styles['form-wrapper'])}>
			<input
				value={firstName}
				type='text'
				onChange={e => {
					firstNameChangeHandler(e)
				}}
			/>
			<br />
			<input
				value={lastName}
				type='text'
				onChange={e => {
					lastNameChangeHandler(e)
				}}
			/>
			<br />
			<input
				value={email}
				type='text'
				onChange={e => {
					emailChangeHandler(e)
				}}
			/>
			<br />
			<button
				onClick={e => {
					addNewUser(e)
				}}
			>
				Добавить{' '}
			</button>
		</form>
	)
}

export default Form
