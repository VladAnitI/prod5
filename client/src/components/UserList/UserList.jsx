import { v4 as uuidv4 } from 'uuid'
import useUserStore from '../../store/userStore'
import User from '../User/User'

const UserList = () => {
	const { users } = useUserStore()

	return (
		<ul>
			{users.map(user => {
				console.log(user)
				return (
					<User
						key={uuidv4()}
						firstName={user.firstName}
						lastName={user.lastName}
						email={user.email}
					/>
				)
			})}
		</ul>
	)
}

export default UserList
