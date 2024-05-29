
import { CreateDescription } from "@/lib/descriptions/createDescription";
import { getDescriptions } from "@/lib/descriptions/getDescriptions";
import { getEntites } from "@/lib/getEntites";
import { Category, CategoryDescription } from "@/types/categories";
import { Description } from "@/types/descriptions";

export const checkDescription = async (
  transactionDescription: string
): Promise<number | null> => {

  const descriptions = await getEntites<Description>("/descriptions");
  const category_descriptions = await getEntites<CategoryDescription>("/categories/descriptions");

  if (descriptions) {
    let descriptionID = descriptions.find(
      (description) => description.name === transactionDescription
    )?.id;
    if (!descriptionID) {
      await CreateDescription(transactionDescription);
      const updatedDescriptions = await getDescriptions();
      descriptionID = updatedDescriptions?.find(
        (description) => description.name === transactionDescription
      )?.id;
    }
    if (descriptionID && category_descriptions) {
            const categoryId = category_descriptions.find((catDesc) => catDesc.description_ID === descriptionID )?.category_ID;
          return categoryId ?? 1;
        }
  }
  return null;
};
