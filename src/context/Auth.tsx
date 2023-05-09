import { useState, createContext } from 'react';



interface props {
    children:  React.ReactNode ;
}

export interface authContext {
    user: string | null;
    setUser : React.Dispatch<React.SetStateAction<string | null>>;
}

export const AuthContext = createContext<authContext | null>(null);


export const AuthProvider: React.FC<props> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null)


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

