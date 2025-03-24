import type { UserEntity } from "@/entities/user";
import { useUpdateUserMutation } from "@/entities/user/model/api";
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
import { notify } from "@/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

type FormData = z.infer<typeof schema>;

type EditUserFormProps = {
  user: UserEntity;
  onSuccess: () => void;
};

export const EditUserForm: FC<EditUserFormProps> = (props) => {
  const {
    user: { id: userId, email },
    onSuccess,
  } = props;
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email,
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;

    const response = await updateUser({
      userId,
      body: {
        email,
        password,
      },
    });

    if ("error" in response) {
      return;
    }

    notify.success("Пользователь обновлен");
    onSuccess?.();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter email"
                  type="email"
                  disabled={isLoading}
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
                  placeholder="Enter password"
                  type="password"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onSuccess}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
