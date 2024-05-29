import { Category } from "@/types/categories";
import { apiRequest } from "../api";

export async function uploadCategories(categories: Category[]) {
  try {
    const promises = categories.map(async (category) => {
      try {
        await apiRequest("/categories", "POST", category);
        console.log("Uploaded:", category);
      } catch (error) {
        console.error("Failed to upload transaction", error);
      }
    });
    await Promise.all(promises);
    console.log("All categories uploaded");

    // TODO: Fix amount update
  } catch (error) {
    console.error("Error uploading categories:", error);
  }
}
