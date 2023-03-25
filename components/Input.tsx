import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input:React.FC<InputProps> =({
    id, onChange, value, label,type
}) =>{
  return (
    <div className="relative">
      <input
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        className="
        block
        rounded-md
        pt-6
        px-6
        pb-1
        w-full
        text-md
        text-white
        bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        "
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute tex-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-3.5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5"
      >
       {label}
      </label>
    </div>
    //the peer class is used to style an element based on the state of a sibling element, mark the sibling with `peer` class with use `peer-*` modifiers like `peer-invalid` to style the target element
  );
}
export default Input