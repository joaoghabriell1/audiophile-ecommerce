"use client";

interface ButtonProps {
  variant: string;
  content: string;
}

type VariantsType = {
  [key: string]: string;
};

const Variants: VariantsType = {
  fill: "text-white bg-dark_orange uppercase tracking-widest p-[1em] my-4 hover:bg-opacity-80",
};

const Button = ({ variant, content }: ButtonProps) => {
  return <button className={Variants[variant]}>{content}</button>;
};

export default Button;
