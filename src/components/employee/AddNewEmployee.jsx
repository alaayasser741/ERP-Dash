import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { InputDemo } from "../../components";
const steps = ["Personal Data", "Image Upload", "Preview"];

const AddNewEmployee = ({ open, handleClose, BootstrapDialog }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    image: null,
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "15px",
          minWidth: "500px",
        },
      }}
    >
      <DialogTitle
        sx={{ m: 0, p: 2, borderBlockEnd: "1px solid #EDEDED" }}
        id="customized-dialog-title"
      >
        Add New employees
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>

      {/* Navigation Header */}
      <Box
        sx={{
          width: "70%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          my: 4,
        }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`cursor-pointer mx-2 font-normal text-sm flex flex-col items-center gap-2 ${
                currentStep === index
                  ? "font-bold text-primary"
                  : "text-[#747474]"
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <div
                className={`w-[24px] h-[24px] border border-white outline-[1px] rounded-full relative ${
                  currentStep === index
                    ? "bg-primary outline outline-primary"
                    : "bg-[#747474]"
                }`}
              >
                <span className="absolute -bottom-6 w-[100px] start-1/2 -translate-x-1/2 text-center">
                  {step}
                </span>
              </div>
            </div>
            {/* Render a line after each step except the last one */}
            {index < steps.length - 1 && (
              <div
                className="flex-grow"
                style={{
                  // height: "2px",
                  // width: "40px",
                  borderBottom: "2px dashed #CACACA",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>

      <DialogContent>
        {currentStep === 0 && (
          <form>
            <InputDemo />
          </form>
        )}
        {currentStep === 1 && (
          <Box>
            <Input
              accept="image/*"
              type="file"
              onChange={handleImageChange}
              inputProps={{ "aria-label": "Upload Image" }}
            />
          </Box>
        )}
        {currentStep === 2 && (
          <Box>
            <Typography variant="h6">Preview</Typography>
            <Typography>Name: {formData.name}</Typography>
            <Typography>Email: {formData.email}</Typography>
            <Typography>Phone: {formData.phone}</Typography>
            {formData.image && (
              <Typography>Image: {formData.image.name}</Typography>
            )}
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        {currentStep > 0 && <Button onClick={handleBack}>Back</Button>}
        {currentStep < steps.length - 1 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        )}
      </DialogActions>
    </BootstrapDialog>
  );
};

export default AddNewEmployee;
