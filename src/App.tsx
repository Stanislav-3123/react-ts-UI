import React, { useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";

const App = () => {
	const [users, setUsers] = useState([])
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


