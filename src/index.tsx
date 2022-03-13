import { render } from 'react-dom';
import { App } from './app/App';

document.addEventListener('DOMContentLoaded', () => {
	render(
		<App />,
		document.getElementById('root')
	);
});