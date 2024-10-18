import { useState } from "react";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const inputDemo = ({
  id,
  label,
  style,
  inputStyle,
  type = "text",
  placeHolder,
  disabled = false,
  value,
  onChange,
  error,
  selectItem = [],
  defaultValue,
}) => {
  const [isPassword, setIsPassword] = useState(false);

  // --------- Global functions ------------------
  const handleChangePassword = () => {
    setIsPassword(!isPassword);
  };
  return (
    <div className={`grid grid-cols-1 w-full ${style} items-center gap-1`}>
      {label && (
        <label
          htmlFor={id}
          className={`text-[16px] font-medium  cursor-pointer w-fit ${
            error ? "text-red-700" : "text-primary"
          }`}
        >
          {label}
        </label>
      )}
      <div className="w-full flex-1">
        {type === "email" ? (
          <input
            type={"email"}
            id={id}
            className={`outline-0 bg-white border ${
              error
                ? " border-red-700 placeholder:text-red-700"
                : "border-gray-200"
            } focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-gray-200 focus:border-blue-400 focus:placeholder:text-gray-600 ${inputStyle}`}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            name={id}
            defaultValue={defaultValue}
          />
        ) : type === "date" ? (
          <>
            <input
              type="date"
              name={id}
              id={id}
              className={`outline-0 bg-white border rounded-md p-2 border-gray-200 ${
                error
                  ? "border-red-700 placeholder:text-red-700"
                  : "border-gray-200"
              } focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-gray-200 focus:border-blue-400 focus:placeholder:text-gray-600 ${
                type === "file" && "cursor-pointer"
              } ${inputStyle}`}
              placeholder={placeHolder}
              value={value}
              onChange={onChange}
              disabled={disabled}
              defaultValue={defaultValue}
              // min={new Date().toISOString().split("T")[0]}
            />
          </>
        ) : type === "radio" ? (
          <div className="flex items-center space-x-4 mb-1">
            {selectItem.map((item, index) => (
              <label key={index} className="flex items-center space-x-2 ">
                <input
                  type="radio"
                  name={id}
                  id={id}
                  value={item.value}
                  checked={value === item.value}
                  onChange={onChange}
                  className=" custom-radio"
                />
                <span className="text-gray-300">{item.label}</span>
              </label>
            ))}
          </div>
        ) : (
          <div className="relative">
            <input
              type={
                type === "password" ? (isPassword ? "text" : "password") : type
              }
              id={id}
              autoComplete={type === "password" ? "current-password" : "off"}
              className={`outline-0 bg-white border rounded-md p-2 border-gray-200 ${
                error
                  ? "border-red-700 placeholder:text-red-700"
                  : "border-gray-200"
              } focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-gray-200 focus:border-blue-400 focus:placeholder:text-gray-600 ${
                type === "file" && "cursor-pointer"
              } ${inputStyle}`}
              placeholder={placeHolder}
              value={value}
              onChange={onChange}
              disabled={disabled}
              name={id}
              defaultValue={defaultValue}
            />
            {type === "password" &&
              (isPassword ? (
                <VisibilityOffIcon onClick={handleChangePassword} />
              ) : (
                <RemoveRedEyeIcon onClick={handleChangePassword} />
              ))}
          </div>
        )}

        {error && <p className="text-red-800 text-xs pt-1 m-0">{error}</p>}
      </div>
    </div>
  );
};

export default inputDemo;
