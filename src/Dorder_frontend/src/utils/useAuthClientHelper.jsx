import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthClient } from "@dfinity/auth-client";

const AuthContext = createContext();

export const useAuthClient = () => {
    const [authClient, setAuthClient] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [identity, setIdentity] = useState(null);
    const [principal, setPrincipal] = useState(null);

    const backendCanisterId =
        process.env.CANISTER_ID_BACKEND ||
        procedd.env.BACKEND_CANISTER_ID;

    const clientInfo = async (client) => {
        const isAuthenticated = await client.isAuthenticated();
        const identity = client.getIdentity();
        const principal = identity.getPrincipal();

        setAuthClient(client);
        setIsAuthenticated(isAuthenticated);
        setIdentity(identity);
        setPrincipal(principal);

        return true;
    }

    useEffect(() => {
        (async () => {
            const authClient = await AuthClient.create();
            const isAuthenticated = await authClient.isAuthenticated();
            const identity = authClient.getIdentity();
            const principal = identity.getPrincipal();

            setAuthClient(authClient);
            setIsAuthenticated(isAuthenticated);
            setIdentity(identity);
            setPrincipal(principal);
        })();
    }, []);


    const login = async () => {
        return new Promise(async (resolve, reject) => {
            try {
                if (authClient.isAuthenticated() && ((await authClient.getIdentity().getPrincipal().isAnonymous()) === false)) {
                    resolve(clientInfo(authClient));
                } else {
                    await authClient.login({
                        identityProvider: process.env.DFX_NETWORK === "ic"
                            ? "https://identity.ic0.app"
                            : `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943`,
                        onError: (error) => reject((error)),
                        onSuccess: () => resolve(clientInfo(authClient)),
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    };

    const logout = async () => {
        await authClient?.logout().then(() => { return true });
    }

    return {
        login, logout, authClient, isAuthenticated, identity, principal, backendCanisterId
    };
}

export const AuthProvider = ({ children }) => {
    const auth = useAuthClient();
    useEffect(() => {
        if (auth && auth?.isAuthenticated === false) {
            auth.login();
            if (window.location.pathname !== '/') {
                window.location.href = "/";
            }
        }
    }, [auth]);
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);
