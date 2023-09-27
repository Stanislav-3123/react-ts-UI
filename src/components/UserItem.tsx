import React, {FC} from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
	user: IUser;
}

const UserItem: FC<UserItemProps> = (user) => {
	return (
		<div style={{padding: 15, border: '1px solid gray'}}>
					{user.user.id}. {user.user.name} проживает в городе {user.user.address.city} на улице {user.user.address.street}
				</div>
	);
};

export default UserItem;