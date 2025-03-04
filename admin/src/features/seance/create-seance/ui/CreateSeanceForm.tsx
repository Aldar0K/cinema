import type { Movie } from "@/entities/movie";
import { useCreateSeanceMutation } from "@/entities/seance";
import {
  Button,
  DateTimePicker,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui";
import { notify } from "@/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  time: z.date(),
});

type FormData = z.infer<typeof schema>;

type CreateSeanceFormProps = {
  movie: Movie;
  onSuccess: () => void;
};

export const CreateSeanceForm: FC<CreateSeanceFormProps> = (props) => {
  const { movie, onSuccess } = props;
  const [createSeance, { isLoading }] = useCreateSeanceMutation();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      time: new Date(),
    }
  });

  const onSubmit = async (data: FormData) => {
    const response = await createSeance({
      body: {
        movieId: movie.id,
        time: data.time,
      },
    }).unwrap();
    onSuccess();

    if ("error" in response) {
      return;
    }

    notify.success("Сеанс создан");
    onSuccess?.();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="time"
          render={({ field: { value, onChange } }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="mt-2">Seance time:</FormLabel>
              <FormControl>
                <DateTimePicker date={value} setDate={onChange} />
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
            {isLoading ? "Creating..." : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
