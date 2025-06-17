"use client"
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from 'react';
  import {
    AuthContextType,
    User,
    LoginResult,
    RegisterData,
  } from './types';
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      checkAuthStatus();
    }, []);
  
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/api/profile/', {
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const login = async (
      username: string,
      password: string
    ): Promise<LoginResult> => {
      try {
        const response = await fetch('/api/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
        if (data.success) {
          setUser(data.user);
          return { success: true };
        } else {
          return { success: false, error: data.error };
        }
      } catch (error) {
        return { success: false, error: 'Network error' };
      }
    };
  
    const logout = async (): Promise<void> => {
      try {
        await fetch('/api/logout/', {
          method: 'POST',
          credentials: 'include',
        });
        setUser(null);
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };
  
    const register = async (
      userData: RegisterData
    ): Promise<any> => {
      try {
        const response = await fetch('/api/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(userData),
        });
  
        return await response.json();
      } catch (error) {
        return { success: false, error: 'Network error' };
      }
    };
  
    const value: AuthContextType = {
      user,
      login,
      logout,
      register,
      loading,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };
  