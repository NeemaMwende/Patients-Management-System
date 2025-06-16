export interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    first_name: string;
    last_name: string;
  }
  
  export interface LoginResult {
    success: boolean;
    error?: string;
  }
  
  export interface RegisterData {
    username: string;
    email: string;
    password: string;
    role?: string;
  }
  
  export interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<LoginResult>;
    logout: () => Promise<void>;
    register: (userData: RegisterData) => Promise<any>;
    loading: boolean;
  }
  