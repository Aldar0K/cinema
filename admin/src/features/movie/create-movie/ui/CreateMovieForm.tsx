import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useCreateMovieMutation } from "@/entities/movie/model/api";
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
import { AnimatePresence, motion } from "framer-motion";

const schema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be less than 100 characters"),
    posterUrl: z.string().optional(),
  })
  .required({
    name: true,
  });

type FormData = z.infer<typeof schema>;

type CreateMovieFormProps = {
  onSuccess: () => void;
};

export const CreateMovieForm: FC<CreateMovieFormProps> = (props) => {
  const { onSuccess } = props;
  const [createMovie, { isLoading }] = useCreateMovieMutation();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const { name, posterUrl } = data;

    const response = await createMovie({
      body: {
        name,
        posterUrl,
      },
    });

    if ("error" in response) {
      return;
    }

    notify.success("Фильм создан");
    onSuccess?.();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter movie name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="posterUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Poster URL</FormLabel>
              <FormControl>
                <Input placeholder="Poster URL" {...field} />
              </FormControl>
              {field.value && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={field.value}
                      alt={field.value}
                      className="max-h-[400px] w-full h-auto object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onSuccess}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
