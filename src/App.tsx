import 'tailwindcss/tailwind.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import HomePage from "src/pages/Home";
import MyIdeaPage from 'src/pages/MyIdea';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/my-idea" element={<MyIdeaPage />} />
			</Routes>
		</>
	);
}

export default App;
