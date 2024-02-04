import Button from '../button/Button';
import './Header.css';


const Header = () => {
	const tg = window.Telegram.WebApp;

	const onClose = () => {
		tg.close();
	}

	return (
		<div className={'header'}>
			<Button onClick={onClose}>Закрыть</Button>
			<span className={'username'}>{tg.initDataUnsafe?.user?.userName}</span>
		</div>
	);
}

export default Header;