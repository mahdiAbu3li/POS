import { compareAsc } from "date-fns";
import { parse } from "date-fns";
import { isValid } from "date-fns";
type order = "asc" | "desc";

const sortArray = <T extends object, K extends keyof T>(
  data: T[],
  orderBy: K,
  order: order
): T[] => {
  if (data.length !== 0) {
    const x = data[0][orderBy];
    if (typeof x === "string") {
      // console.log(isValid(parse(x, "d/M/yyyy", new Date())))
      if (isValid(parse(x, "d/M/yyyy", new Date()))) {
        return data.sort((a, b) => {
          const x = (a[orderBy] as unknown) as string;
          const y = (b[orderBy] as unknown) as string;
          const r = compareAsc(
            parse(x, "d/M/yyyy", new Date()),
            parse(y, "d/M/yyyy", new Date())
            );
          return order === "asc" ? r : -r;
        });
      } else {
        
        return data.sort((a, b) => {
          if (a[orderBy] > b[orderBy]) {
            return order === "asc" ? 1 : -1;
          } else if (a[orderBy] < b[orderBy]) {
            return order === "asc" ? -1 : 1;
          }
          return 0;
        });
      }
    } else {
      
      return data.sort((a, b) => {
        if (a[orderBy] > b[orderBy]) {
          return order === "asc" ? 1 : -1;
        } else if (a[orderBy] < b[orderBy]) {
          return order === "asc" ? -1 : 1;
        }
        return 0;
      });
    }
  } else {
    return data;
  }
};

export { sortArray };
