import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { Movie } from "@/entities/movie";
import { useUpdateMovieMutation } from "@/entities/movie/model/api";
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

type EditMovieFormProps = {
  movie: Movie;
  onSuccess: () => void;
};

export const EditMovieForm: FC<EditMovieFormProps> = (props) => {
  const { movie, onSuccess } = props;
  const [updateMovie, { isLoading }] = useUpdateMovieMutation();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: movie.name,
      posterUrl: movie.posterUrl,
    },
  });

  const onSubmit = async (data: FormData) => {
    const { name, posterUrl } = data;

    const response = await updateMovie({
      id: movie.id,
      body: {
        name,
        posterUrl,
      },
    });

    if ("error" in response) {
      return;
    }

    notify.success("Movie updated");
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
                <Input placeholder="Movie name" {...field} />
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
                      className="max-h-[600px] w-full h-auto object-contain"
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
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
