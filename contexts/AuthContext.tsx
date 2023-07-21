import React, { useContext, useState, useEffect, createContext, useMemo } from "react"
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, getAuth, User, UserCredential, createUserWithEmailAndPassword } from "firebase/auth"

import firebase_app from "@/firebase/config";
import { LoginCredentials } from "@/typings";


const auth = getAuth(firebase_app);

interface Context {
    currentUser: User | null,
    isModalOpen: boolean,
    toggleModal: () => void,
    login(loginCredentials: LoginCredentials): Promise<UserCredential>,
    logout(): Promise<void>,
    register(loginCredentials: LoginCredentials): Promise<UserCredential>,
}

const AuthContext = createContext<Context | undefined>(undefined)

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth context must be within AuthProvider");
    }
    return context;
}

export function AuthProvider({ children }: { children: React.ReactNode; }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);


    function login({ email, password }: LoginCredentials) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function register({ email, password }: LoginCredentials) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function toggleModal() {
        setIsModalOpen((prevState) => !prevState);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = useMemo<Context>(() => ({
        currentUser,
        isModalOpen,
        toggleModal,
        login,
        logout,
        register,
    }), [currentUser, isModalOpen, toggleModal, login, logout, register])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}