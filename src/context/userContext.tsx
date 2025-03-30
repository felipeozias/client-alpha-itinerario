import { type ReactNode, createContext, useContext, useState } from "react";

interface IUser {
	name?: string;
	email?: string;
	phone?: string;
}

interface UserContextType {
	user: IUser;
	setUser: (usuario: IUser) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<IUser>({ name: "", email: "", phone: "" });

	return (
		<UserContext.Provider value={{ user: user, setUser: setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const contexto = useContext(UserContext);
	if (!contexto) {
		throw new Error("User must be used within a UserProvider");
	}
	return contexto;
}
