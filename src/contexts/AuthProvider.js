import { destroyCookie } from 'nookies'
import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider(props) {
	const { value, children } = props
	const [user, setUser] = useState(value)

	const logout = () => {
		setUser({})
		destroyCookie(null, 'jwt')
	}
	const storeUser = (user) => {
		setUser({ ...user })
	}

	return (
		<AuthContext.Provider value={{
			user: user,
			logout: logout,
			storeUser: storeUser
		}}>
			{children}
		</AuthContext.Provider>
	)
}