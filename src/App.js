import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/Header';


const App = () => {
	const { onToggleButton, tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, []);



	return (
		<div className="app">
			<Header />
			<button onClick={onToggleButton}>toggle</button>
		</div>
	);
}

export default App;
