"use-client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { createCategory } from "@/lib/categories/createCategory";

const newCategorySchema = z.object({
  categoryName: z.string().min(1).max(30),
  categoryBudget: z.coerce.number().min(1).max(100000),
});

type CreateBudgetCategoryFormProps = {
  collectionName: string;
  onSetIsDialogOpen: (isOpen: boolean) => void;
};

export default function CreateBudgetCategoryForm({
  collectionName,
  onSetIsDialogOpen,
}: CreateBudgetCategoryFormProps) {
  const newCategoryForm = useForm<z.infer<typeof newCategorySchema>>({
    resolver: zodResolver(newCategorySchema),
    mode: "onSubmit",
    values: {
      categoryName: "",
      categoryBudget: 1,
    },
  });

  async function onSubmit(values: z.infer<typeof newCategorySchema>) {
    console.log(values.categoryBudget);
    console.log(values.categoryName);

    await createCategory(
      collectionName,
      values.categoryName,
      values.categoryBudget
    );

    onSetIsDialogOpen(false);
  }

  return (
    <>
      <Form {...newCategoryForm}>
        <form
          onSubmit={newCategoryForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={newCategoryForm.control}
            name="categoryName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Electronic" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={newCategoryForm.control}
            name="categoryBudget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget</FormLabel>
                <FormControl>
                  <Input placeholder="1000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}
