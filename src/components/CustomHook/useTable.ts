import { useState } from "react";
import { TypeData } from "../Function/FilterDateFunction";
import {
  sortStringAndNumericArray,
  sortDateArray,
} from "../Function/sortArray";
type orderType = Omit<TypeData, "id">;

const useTable = (data: TypeData[]) => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof orderType>("name");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (name: keyof orderType) => {
    const isAsc = orderBy === name && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(name);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const ArrayAfterSortAndSliceAndFilter =
    orderBy === "expiration_date"
      ? sortDateArray(data, orderBy, order)
          .filter(
            (item: TypeData) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.code.toLowerCase().includes(search.toLowerCase())
          )
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : sortStringAndNumericArray(data, orderBy, order)
          .filter(
            (item: TypeData) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.code.toLowerCase().includes(search.toLowerCase())
          )
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (e: any, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e: any) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  return {
    handleChangeRowsPerPage,
    handleChangePage,
    handleSearch,
    handleSort,
    page,
    rowsPerPage,
    order,
    orderBy,
    ArrayAfterSortAndSliceAndFilter,
  };
};
export default useTable;
