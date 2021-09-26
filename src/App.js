import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
	// currently taking guestlimit locally
	const guestLimit = 100;
	return (
		<div className='App'>
			<Header guestLimit={guestLimit} />
			<Main guestLimit={guestLimit} />
		</div>
	);
}

export default App;
