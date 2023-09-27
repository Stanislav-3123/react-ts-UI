import React, {FC} from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
	users: IUser;
}

const UserItem: FC<UserItemProps> = (users) => {
	return (
		<div style={{padding: 15, border: '1px solid gray'}}>
					{users.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
				</div>
	);
};

export default UserItem;