import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";

import { useLoginMutation } from "@/entities/auth";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { cn } from "@/shared/utils";
import { formSchema, type FormSchema } from "../../model/schema";

export type SignInFormProps = {
  className?: string;
};

const SignInForm: FC<SignInFormProps> = (props) => {
  const { className } = props;
  const [loginMutate, { isLoading: isLoadingLogin }] = useLoginMutation();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormSchema) => {
    const response = await loginMutate({
      email: values.email,
      password: values.password,
    });

    if ("error" in response) {
      form.setError("root", {
        message: "Invalid credentials",
      });
    }
  };

  const rootError = form.formState.errors.root?.message;

  return (
    <Card className={cn("w-[350px]", className)} data-testid="sign-in-form">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      disabled={isLoadingLogin}
                      {...field}
                    />
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
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      disabled={isLoadingLogin}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {rootError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <p className="text-sm">{rootError}</p>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoadingLogin}>
              {isLoadingLogin ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
