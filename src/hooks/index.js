import { useContext } from "react";
import {AuthContext} from "../contexts/AuthProvider"

export function useAuthContext() {
	return useContext(AuthContext);
}