export interface TypeData {
  id: number;
  CategoryName: string;
  CreatedAt: string;
}
type orderBy = keyof TypeData;
type order = "asc" | "desc";
const sortArray = (
  data: TypeData[],
  orderBy: orderBy,
  order: order
): TypeData[] => {
  if (orderBy === "CategoryName") {
    return data.sort((a, b) => {
      if (a.CategoryName[0] > b.CategoryName[0]) {
        return order === "asc" ? 1 : -1;
      } else if (a.CategoryName[0] < b.CategoryName[0]) {
        return order === "asc" ? -1 : 1;
      }
      return 0;
    });
  } else if (orderBy === "CreatedAt") {
    return data.sort((a, b) => {
      if (a.CreatedAt[0] > b.CreatedAt[0]) {
        return order === "asc" ? 1 : -1;
      } else if (a.CreatedAt[0] < b.CreatedAt[0]) {
        return order === "asc" ? -1 : 1;
      }
      return 0;
    });
  } else {
    return data;
  }
};

export { sortArray };
