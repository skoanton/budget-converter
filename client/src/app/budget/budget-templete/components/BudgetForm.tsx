"use client";
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
import { Input } from "@/components/ui/input";
import { useCategoryStore } from "@/lib/store/useCategoriesStore";
import { Category } from "@/types/categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { v4 as uuidv4 } from "uuid";
type BudgetFormProps = {
  categoryType: {
    name: string;
    id: number;
  };
};

const budgetFormSchema = z.object({
  categoryName: z.string(),
  budget: z.coerce.number(),
});

export default function BudgetForm({ categoryType }: BudgetFormProps) {
  const { addCategory } = useCategoryStore();
  const budgetForm = useForm<z.infer<typeof budgetFormSchema>>({
    resolver: zodResolver(budgetFormSchema),
    defaultValues: {
      categoryName: "",
      budget: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof budgetFormSchema>) {
    const newCategory: Category = {
      id: uuidv4(),
      name: values.categoryName,
      budget: values.budget,
      spent: 0,
      category_type_ID: categoryType.id,
    };
    addCategory(newCategory);
  }

  return (
    <>
      <Form {...budgetForm}>
        <form
          onSubmit={budgetForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={budgetForm.control}
            name="categoryName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Electronic" {...field} />
                </FormControl>
                <FormDescription>
                  This will be the displayed category name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={budgetForm.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly Budget</FormLabel>
                <FormControl>
                  <Input placeholder="2000" {...field} />
                </FormControl>
                <FormDescription>
                  This will be your budget for this category.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add</Button>
        </form>
      </Form>
    </>
  );
}
