import { Category } from "@/types/transactionsType";


export const sortCategory = (arrayToSort:Category[]): Category[] => {

    return arrayToSort.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });


}