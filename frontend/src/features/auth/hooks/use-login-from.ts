import { useToast } from '@chakra-ui/react';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../../../libs/api";
import { SET_USER } from "../../../redux/slices/auth";
import { LoginForm } from '../types/login-form';
import { loginSchema } from '../validators/login-form';

export const useLoginForm = () => {

    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm<LoginForm>({
        mode: "onChange",
        resolver: zodResolver(loginSchema),
    });
    

    const onSubmit: SubmitHandler<LoginForm> = async (data) => {

        try{
            
            const response = await api.post("/auth/login", data);
            const token = response.data.token;
            const user = response.data.user;
            
            if(token) localStorage.setItem("token", response.data.token);

            if(user) {
                dispatch(SET_USER(user));
                toast({
                    title: 'Login Success',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                navigate("/home"); // di halaman coba
            }
        } catch(error){
            toast({
                title: 'Login Failed',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
        
    }
    return {
        register,
        handleSubmit,
        onSubmit,
        errors
    }
        
    
}