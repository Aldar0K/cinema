import type { Seance } from "@/entities/seance";
import { useUpdateSeanceMutation } from "@/entities/seance/model/api";
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

type EditSeanceFormProps = {
  seance: Seance;
  onSuccess: () => void;
};

export const EditSeanceForm: FC<EditSeanceFormProps> = (props) => {
  const { seance, onSuccess } = props;
  const [updateSeance, { isLoading }] = useUpdateSeanceMutation();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      time: new Date(seance.time),
    },
  });

  const onSubmit = async (data: FormData) => {
    const response = await updateSeance({
      seanceId: seance.id,
      body: {
        time: data.time,
      },
    });

    if ("error" in response) {
      return;
    }

    notify.success("Сеанс обновлен");
    onSuccess?.();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="time"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Seance time:</FormLabel>
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
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
