import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { axiosClient } from "@/shared/api";
import { CookieNames } from "@/shared/constants";
import { authActions, useAppDispatch } from "@/shared/store";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { cn } from "@/shared/utils";
import { Navigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

type SignInFormProps = {
  className?: string;
};

export const SignInForm: FC<SignInFormProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axiosClient
        .post("/auth/sign-in", values, { withCredentials: true })
        .finally(() => {
          setIsLoading(false);
        });

      Cookies.set(CookieNames.ACCESS_TOKEN, response.data.access_token, {
        secure: true,
      });

      dispatch(authActions.setUser({ username: response.data.username }));
      setSuccess(true);
    } catch (error) {
      setErrorMessage((error as any).response.data.message);
    }
  };

  return (
    <div className={cn("", {}, [className])} data-testid="SignInForm">
      {success ? (
        <Navigate to="/ice-cream" />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {errorMessage && <p>{errorMessage}</p>}

            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};
