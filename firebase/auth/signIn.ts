import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, UserCredential } from "firebase/auth";

const auth = getAuth(firebase_app);

interface signInResponse {
    success: boolean,
    error: any,
}

export default async function signIn(email: string, password: string): Promise<signInResponse> {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return { success: true, error: null };
    } catch (error) {
        return { success: false, error };
    }
}