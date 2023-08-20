import 'tailwindcss/tailwind.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import HomePage from "src/pages/Home";
import MyIdeaPage from 'src/pages/MyIdea';
import CreateIdeaPage from 'src/pages/CreateIdea';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/my-idea" element={<MyIdeaPage />} />
				<Route path="/create-idea" element={<CreateIdeaPage />} />
			</Routes>
		</>
	);
}

export default App;
