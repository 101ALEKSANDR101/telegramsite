import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp

const App = () => {

	useEffect(() => {
		tg.ready();
	}, []);

	const close = () => {
		tg.close();
	}

	return (
		<div className="app">
			work
			<button onClick={() => close()}>Закрыть</button>
		</div>
	);
}

export default App;
