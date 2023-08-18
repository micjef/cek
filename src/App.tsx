import 'tailwindcss/tailwind.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import HomePage from "src/pages/Home";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
