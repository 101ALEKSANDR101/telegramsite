import { useEffect } from 'react';
import './App.css';


const App = () => {

	useEffect(() => {
		tg.ready();
	}, []);

	

	return (
		<div className="app">
			work
			<button onClick={() => close()}>Закрыть</button>
		</div>
	);
}

export default App;
