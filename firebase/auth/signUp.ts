import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

interface signUpResponse {
    success: boolean,
    error: any,
}

export default async function signUp(email: string, password: string): Promise<signUpResponse> {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        return { success: true, error: null };
    } catch (error) {
        return { success: false, error };
    }
}