import { useState } from "react";
import { sortArray } from "../Function/sortArray";

const useTable = <T extends object>(data: T[], searchBy: Array<keyof T>) => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof T | "">("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (name: keyof T) => {
    const isAsc = orderBy === name && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(name);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const array =
    orderBy !== "" && orderBy !== undefined
      ? sortArray(data, orderBy, order)
      : data;

  const ArrayAfterSortAndSliceAndSearch = array
    .filter((item) => {
      return searchBy.some((item1) => {
        const x = item[item1];
        if (typeof x === "string") {
          return x.toLowerCase().includes(search.toLowerCase());
        } else if (typeof x === "number") {
          return x === parseInt(search, 10);
        } else {
          return true;
        }
      });
    })
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
    ArrayAfterSortAndSliceAndSearch,
  };
};
export default useTable;

// item.code.toLowerCase().includes(search.toLowerCase())
// Object.keys(item)[1].toLowerCase().includes(search.toLowerCase())
