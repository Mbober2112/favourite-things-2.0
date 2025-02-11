import React, { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  COMMON = "common",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...props}
    >
      {children}
    </button>
  );
};
