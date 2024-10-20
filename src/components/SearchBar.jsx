import { SearchIcon, PlusIcon } from "../assets/icons";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { useEffect, useState } from "react";
import AddNewEmployee from "./employee/AddNewEmployee";
import { useSearchParams } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const SearchBar = ({ action }) => {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  // Update URL when searchQuery changes
  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ search: searchQuery });
    } else {
      setSearchParams({});
    }
  }, [searchQuery, setSearchParams]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams({ search: value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="p-4 flex items-center gap-4 flex-col sm:flex-row">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full h-[48px] px-14 rounded-[50px] focus:outline-primary border border-[#E2E2E2]"
        />
        <div className="absolute top-1/2 -translate-y-1/2 start-4">
          <SearchIcon />
        </div>
      </div>
      <button
        onClick={handleClickOpen}
        className="h-[48px] bg-primary text-white text-sm rounded-[50px] focus:outline-none px-6 flex items-center gap-1"
      >
        <PlusIcon />
        <span className="ml-2">New Employee</span>
      </button>

      <AddNewEmployee
        open={open}
        handleClose={handleClose}
        BootstrapDialog={BootstrapDialog}
        action={action}
      />
    </section>
  );
};

export default SearchBar;
