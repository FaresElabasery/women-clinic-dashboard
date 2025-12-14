import axios, { AxiosError } from "axios";
type APIErrorResponse = {
  status: string;
  message: string;
};

export default async function Login(formData: { email: string; password: string }) {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, formData);
        return {
            ok: true,
            status: 'success',
            token: res.data.token,
            user: res.data.data.user,
        }
    } catch (error) {
        const err = error as AxiosError;
        return {
            ok: false,
            status: 'error',
            message: (err.response?.data as APIErrorResponse).message || 'Login failed',
        }
    }
}
