import React from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
	const users: IUser[] = [
		{id: 1, name: 'Dmitiy', email: 'itcamasutra@mail.ru', address: {city: 'Moscow', street: 'Lenina', zipcode: '232'}},
		{id: 2, name: 'Natasha', email: 'SweetHouse@mail.ru', address: {city: 'Donetsk', street: 'Savrasova', zipcode: '123'}}
	]
	return (
		<div>
			<Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width='200px' height='200px'>
				<button>Кнопка</button>
			</Card>
			<UserList users={users}/>
		</div>
	);
};

export default App;