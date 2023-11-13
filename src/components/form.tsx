import React from "react";
import { z , ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

interface Concert {
    artist: string;
    location: string;
    hour: number;
    minute: number;
    month: number;
    day: number;
    avatar?: string;
    background?: string;
}


export const FormItem = () => {

    const ConcertSchema: ZodType<Concert> = z.object({
        artist: z.string().min(10),
        location: z.string().min(10),
        hour: z.number(),
        minute: z.number(),
        month: z.number(),
        day: z.number(),
        avatar: z.string(),
        background: z.string()
      })
    
    const {
        register,
        handleSubmit,
        formState: {errors , isSubmitting}, } = useForm<Concert>({resolver: zodResolver(ConcertSchema)})
    
      const submitData = (data: Concert) => {
        console.log("here is your data");
        console.log(data)
      }
    
    return <div>FORM</div>
    /* TODO
    return(
        <>
        <form onSubmit={handleSubmit(submitData)}>
        <FormControl>
        <FormLabel>First Name:</FormLabel>
        <Input type="text" {...register("firstName")} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <FormLabel>Last Name:</FormLabel>
        <Input type="text" {...register("lastName")} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <FormLabel>Email:</FormLabel>
        <Input type="text" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
        <FormLabel>Password:</FormLabel>
        <Input type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
        <FormLabel>Confirm Password:</FormLabel>
        <Input type="password" {...register("cpassword")} />
        {errors.cpassword && <span>{errors.cpassword.message}</span>}
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
        </Button>
        </FormControl>
        </form>
        </>
    )
    */
}