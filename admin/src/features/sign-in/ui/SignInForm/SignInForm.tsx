import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useLoginMutation } from "@/entities/auth";
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

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

type SignInFormProps = {
  className?: string;
};

export const SignInForm: FC<SignInFormProps> = (props) => {
  const { className } = props;
  // const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loginMutate, { isLoading: isLoadingLogin }] = useLoginMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setErrorMessage("");
    console.log(values);

    const response = await loginMutate({
      email: values.email,
      password: values.password,
    });
    console.log(response);

    // try {
    //   const response = await axiosClient
    //     .post("/auth/sign-in", values, { withCredentials: true })
    //     .finally(() => {
    //       setIsLoading(false);
    //     });

    // dispatch(authActions.setUser({ email: response.data.email }));
    //   setSuccess(true);
    // } catch (error) {
    //   setErrorMessage((error as any).response.data.message);
    // }
  };

  return (
    <div className={cn("", {}, [className])} data-testid="SignInForm">
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

          <Button type="submit" disabled={isLoadingLogin}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
