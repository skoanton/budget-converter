import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { getYears } from "@/utils/getYears";
import { getMonths } from "@/utils/getMonths";
import { getDaysInMonth } from "@/utils/getDaysInMonth";
const dateSchema = z.object({
  year: z.coerce.number().min(2000).max(new Date().getFullYear()),
  month: z.string(),
});

type DateFormProps = {
  onSetDate: (date: Date[]) => void;
};

export default function DateForm({ onSetDate }: DateFormProps) {
  const years = getYears(2000);
  const months = getMonths();
  const dateForm = useForm<z.infer<typeof dateSchema>>({
    resolver: zodResolver(dateSchema),
    values: {
      year: new Date().getFullYear(),
      month: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof dateSchema>) {
    const monthIndex = months.findIndex((month) => month === values.month);
    const newDate = getDaysInMonth(values.year, monthIndex);
    console.log(newDate);
    onSetDate(newDate);
  }

  return (
    <>
      <Form {...dateForm}>
        <form
          onSubmit={dateForm.handleSubmit(onSubmit)}
          className="flex items-center gap-4"
        >
          <FormField
            control={dateForm.control}
            name="year"
            render={({ field }) => (
              <FormItem className="flex gap-2">
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => {
                        return (
                          <SelectItem
                            key={year.toString()}
                            value={year.toString()}
                          >
                            {year}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={dateForm.control}
            name="month"
            render={({ field }) => (
              <FormItem className="flex gap-2">
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month) => {
                        return (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Search</Button>
        </form>
      </Form>
    </>
  );
}
