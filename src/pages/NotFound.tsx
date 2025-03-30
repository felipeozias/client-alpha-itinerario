function NotFound() {
	return (
		<>
			<div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
				<h1 className="text-6xl font-bold text-red-500">404</h1>
				<h2 className="text-2xl mt-4">Página não encontrada</h2>
				<p className="text-gray-400 mt-2">
					A página que você procura não existe ou foi movida.
				</p>

				<a
					href="/"
					className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition duration-300"
				>
					Voltar para Home
				</a>
			</div>
		</>
	);
}

export default NotFound;
