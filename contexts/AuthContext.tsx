"use client"

import React, { useContext, useState, useEffect, createContext, useMemo, useCallback } from "react"
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, getAuth, User, UserCredential, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"

import firebase_app from "@/firebase/config";
import { LoginCredentials } from "@/typings";
import { ModalScene } from "@/enums";


const auth = getAuth(firebase_app);

interface Context {
    currentUser: User | null,
    isModalOpen: boolean,
    modalScene: ModalScene | undefined
    toggleModal: () => void,
    handleModalSceneChange: (modalScene: ModalScene) => void,
    loginUser(loginCredentials: LoginCredentials): Promise<UserCredential>,
    logout(): Promise<void>,
    registerUser(loginCredentials: LoginCredentials): Promise<UserCredential>,
    signInUserWithGmail: () => Promise<UserCredential>,
    signInUserWithGithub: () => Promise<UserCredential>
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
    const [modalScene, setModalScene] = useState<ModalScene>();


    const loginUser = useCallback(({ email, password }: LoginCredentials) => {
        return signInWithEmailAndPassword(auth, email, password)
    }, [])

    const logout = useCallback(() => {
        return signOut(auth)
    }, [])

    const registerUser = useCallback(({ email, password }: LoginCredentials) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }, [])

    const toggleModal = useCallback(() => {
        setIsModalOpen((prevState) => !prevState);
    }, [])

    const handleModalSceneChange = useCallback((modalScene: ModalScene) => {
        setModalScene(modalScene);
    }, [])

    const signInUserWithGmail = useCallback(() => {
        return signInWithPopup(auth, new GoogleAuthProvider);
    }, [])

    const signInUserWithGithub = useCallback(() => {
        return signInWithPopup(auth, new GithubAuthProvider);
    }, [])

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
        modalScene,
        handleModalSceneChange,
        toggleModal,
        loginUser,
        logout,
        registerUser,
        signInUserWithGithub,
        signInUserWithGmail
    }), [currentUser, isModalOpen, modalScene, toggleModal, loginUser, logout, registerUser, handleModalSceneChange, signInUserWithGithub, signInUserWithGmail])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}