import { isWithinInterval } from "date-fns";
import { parse } from "date-fns";
interface TypeData {
  id: number;
  code: string;
  name: string;
  category: string;
  product_description: string;
  tax: number;
  price: number;
  expiration_date: string;
}
type TypeDate = Date | null;

export const FilterFunction = (
  data: TypeData[],
  fromDate: TypeDate,
  toDate: TypeDate
) => {
  if (fromDate !== null && toDate !== null) {
    return data.filter((i) =>
      isWithinInterval(parse(i.expiration_date, "dd/MM/yyyy", new Date()), {
        start: fromDate,
        end: toDate,
      })
    );
  }
};
