import { Category } from "@/types/categories";
import { SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
type CategorySelectGroupProps = {
  title: string;
  categories: Category[];
};

export default function CategorySelectGroup({
  title,
  categories,
}: CategorySelectGroupProps) {
  return (
    <>
      <SelectGroup>
        <SelectLabel className="underline">{title}</SelectLabel>
        {categories.length > 0 ? (
          categories.map((category) => (
            <SelectItem
              key={category.id.toString()}
              value={category.id.toString()}
            >
              {category.name}
            </SelectItem>
          ))
        ) : (
          <SelectItem value={`${title}-none`}>
            No {title} Categories Found
          </SelectItem>
        )}
      </SelectGroup>
    </>
  );
}
