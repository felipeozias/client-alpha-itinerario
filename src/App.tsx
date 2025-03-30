import { Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// import CustomButton from "@components/CustomButton";
import { UserProvider } from "@context/userContext";

function App() {
	// const navigate = useNavigate();

	return (
		<>
			<UserProvider>

				<Outlet />

				{/* <footer className="bg-amber-300 flex justify-center items-center h-8 fixed bottom-0 w-full">
					<p className="italic">Projeto Itinerário | Soluções em tecnologia</p>
				</footer> */}
			</UserProvider>
		</>
	);
}

export default App;
