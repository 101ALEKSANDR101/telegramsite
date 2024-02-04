import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';


const App = () => {
	const { onToggleButton, tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, []);



	return (
		<div className="app">
			work
			<button onClick={onToggleButton}>toggle</button>
		</div>
	);
}

export default App;
