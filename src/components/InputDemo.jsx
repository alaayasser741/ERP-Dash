import { useState } from "react";

import { handleKeyDown, handleWheel } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Eye, EyeOff } from "lucide-react";

const InputDemo = ({
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
        <Label
          htmlFor={id}
          className={`text-[16px] font-medium  cursor-pointer w-fit ${
            error ? "text-red-700" : "text-primary"
          }`}
        >
          {label}
        </Label>
      )}
      <div className="w-full flex-1">
        {type === "email" ? (
          <Input
            type={"email"}
            id={id}
            className={`outline-0 bg-white border ${
              error
                ? " border-red-700 placeholder:text-red-700"
                : "border-gray-200"
            } focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-gray-200 focus:border-blue-400 focus:placeholder:text-gray-600 ${inputStyle}`}
            placeholder={placeHolder}
            onKeyDown={handleKeyDown}
            onWheel={handleWheel}
            value={value}
            onChange={onChange}
            disabled={disabled}
            name={id}
            defaultValue={defaultValue}
          />
        ) : type === "date" ? (
          <>
            <Input
              type="date"
              name={id}
              id={id}
              className={`outline-0 bg-white border ${
                error
                  ? "border-red-700 placeholder:text-red-700"
                  : "border-gray-200"
              } focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-gray-200 focus:border-blue-400 focus:placeholder:text-gray-600 ${
                type === "file" && "cursor-pointer"
              } ${inputStyle}`}
              placeholder={placeHolder}
              onKeyDown={handleKeyDown}
              onWheel={handleWheel}
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
                <Input
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
            <Input
              type={
                type === "password" ? (isPassword ? "text" : "password") : type
              }
              id={id}
              autoComplete={type === "password" ? "current-password" : "off"}
              className={` outline-0 bg-white border ${
                error
                  ? "border-red-700 placeholder:text-red-700"
                  : "border-gray-200"
              } focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-gray-200 focus:border-blue-400 focus:placeholder:text-gray-600 ${inputStyle}`}
              placeholder={placeHolder}
              onKeyDown={handleKeyDown}
              onWheel={handleWheel}
              value={value}
              onChange={onChange}
              disabled={disabled}
              name={id}
              defaultValue={defaultValue}
            />
            {type === "password" &&
              (isPassword ? (
                <EyeOff
                  onClick={handleChangePassword}
                  className="absolute right-2 top-2 cursor-pointer z-40 text-gray-400"
                  size={25}
                  strokeWidth={1.5}
                />
              ) : (
                <Eye
                  onClick={handleChangePassword}
                  className="absolute right-2 top-2 cursor-pointer z-40 text-gray-400"
                  size={25}
                  strokeWidth={1.5}
                />
              ))}
          </div>
        )}

        {error && <p className="text-red-800 text-xs pt-1 m-0">{error}</p>}
      </div>
    </div>
  );
};

export default InputDemo;
