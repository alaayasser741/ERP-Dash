/* eslint-disable react/prop-types */
import { useTable } from "react-table";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import { SearchBar } from "../components";

const TableDemo = ({ data, columns }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // Pagination state
  const [page, setPage] = useState(1); // Start from page 1
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Handle pagination change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Pagination calculation
  const paginatedRows = rows.slice(
    (page - 1) * rowsPerPage,
    (page - 1) * rowsPerPage + rowsPerPage
  );

  // Calculate total pages
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  return (
    <>
      <TableContainer
        sx={{
          boxShadow: " 0px 3px 15px 0px #EEEEEE80",
          borderRadius: "8px",
          overflow: "hidden",
          border: "0.75px solid #F8F9FA",
          backgroundColor: "#FFFFFF",
        }}
      >
        <SearchBar />
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => {
              const { key, ...headerGroupProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <TableRow key={key} {...headerGroupProps}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...columnProps } = column.getHeaderProps();
                    return (
                      <TableCell
                        sx={{ fontWeight: "500", color: "#000000" }}
                        key={key}
                        {...columnProps}
                      >
                        {column.render("Header")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {paginatedRows.map((row) => {
              prepareRow(row);
              const { key, ...rowProps } = row.getRowProps();
              return (
                <TableRow key={key} {...rowProps}>
                  {row.cells.map((cell) => {
                    const { key, ...cellProps } = cell.getCellProps();
                    return (
                      <TableCell
                        sx={{ fontWeight: "400", color: "#2A2A2A" }}
                        key={key}
                        {...cellProps}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Component */}
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChangePage}
        variant="outlined"
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "center",
          "& .MuiPaginationItem-root": {
            borderColor: "#ccc",
            color: "#D3D3D3",
            "&.Mui-selected": {
              color: "#026980",
              borderColor: "#026980",
              backgroundColor: "#fff",
            },
          },
        }}
      />
    </>
  );
};

export default TableDemo;
