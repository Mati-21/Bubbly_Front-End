import { EyeClosed, EyeIcon } from "lucide-react";
import { useState } from "react";

function Input({ register, name, label, placeholder, type, error, Icon }) {
  const [showpassword, setShowPassowrd] = useState(false);
  const toggleShowPassword = () => {
    setShowPassowrd((prev) => !prev);
  };

  const inputType = type === "password" && showpassword ? "text" : type;

  return (
    <div>
      <label htmlFor="email" className="block mt-2">
        {label}
      </label>
      <div className="w-full flex items-center mt-1 border border-slate-700 space-y-1 px-4 rounded-md relative">
        {Icon && <Icon className="w-5 h-5 text-slate-600" />}
        <input
          type={inputType}
          {...register(name)}
          name={name}
          id={name}
          autoComplete={
            name === "name"
              ? "name"
              : name === "email"
              ? "email"
              : name === "password"
              ? "new-password"
              : name === "confirm_password"
              ? "new-password"
              : "off"
          }
          placeholder={placeholder}
          className=" text-black px-4 py-1 bg-transparent w-full outline-none placeholder:text-slate-800 placeholder:text-sm"
        />

        {type === "password" ? (
          showpassword ? (
            <EyeIcon
              onClick={() => toggleShowPassword()}
              className="absolute w-5 h-5 right-4 cursor-pointer"
            />
          ) : (
            <EyeClosed
              onClick={() => toggleShowPassword()}
              className="absolute w-5 h-5 right-4 cursor-pointer"
            />
          )
        ) : (
          ""
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default Input;
