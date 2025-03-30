import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CustomButton from "@components/CustomButton";
import { UserProvider } from "@context/userContext";

function App() {
	const navigate = useNavigate();

	return (
		<>
			<UserProvider>
				<header className="bg-gray-300  h-10 fixed top-0 w-full flex justify-center items-center">
					<CustomButton
						className="mx-1"
						label="Home"
						onClick={() => {
							navigate("/");
						}}
					/>
					<CustomButton
						className="mx-1"
						label="Page A"
						onClick={() => {
							navigate("/a");
						}}
					/>
					<CustomButton
						className="mx-1"
						label="Page B"
						onClick={() => {
							navigate("/b");
						}}
					/>
				</header>

				<main className="pt-10 pb-8">
					<Outlet />
				</main>

				<footer className="bg-amber-300 flex justify-center items-center h-8 fixed bottom-0 w-full">
					<p className="italic">Decada Digital | Soluções em tecnologia</p>
				</footer>
			</UserProvider>
		</>
	);
}

export default App;
