import React, { ButtonHTMLAttributes, FC } from "react";
import cls from "./Loader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <span
      className={classNames(cls.loader, {}, [classNames(className)])}
    ></span>
  );
};
