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
import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
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
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await updateMovie({
        id: movie.id,
        body: data,
      }).unwrap();
      onSuccess();
    } catch (error) {
      // Handle error
    }
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
