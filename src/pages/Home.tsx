import { useUser } from "@context/userContext";

function Home() {
	const { user, setUser } = useUser();

	const setName = (name: string) => {
		setUser({ ...user, name: name });
	};

	return (
		<>
			<div className="w-full h-full flex flex-col items-center justify-center p-1">
				<h1>Page Home</h1>
				<p>This is Page Home</p>
				<img
					className="h-30"
					src="https://http2.mlstatic.com/D_NQ_NP_601806-MLB43601687261_092020-O.webp"
					alt="img"
				/>

				<section>
					<h1 className="font-bold italic">Usando useContext</h1>
					Nome:
					<input
						className="border-2 border-solid border-amber-600"
						type="text"
						name=""
						id=""
						onInput={(e: React.FormEvent<HTMLInputElement>) => {
							setName((e.target as HTMLInputElement).value);
						}}
					/>
					<p>Nome: {user.name || "Decada Digital"}</p>
					<p>Email: {user.email || "contato@decadadigital.com"}</p>
					<p>Telefone: {user.phone || "84 9 2149-3191"}</p>
				</section>
			</div>
		</>
	);
}

export default Home;
