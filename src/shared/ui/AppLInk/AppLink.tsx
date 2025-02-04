import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  theme = AppLinkTheme.PRIMARY,
  children,
}) => {
  return (
    <Link
      to={to}
      className={classNames(cls.appLink, { theme }, [
        classNames(className),
        cls[theme],
      ])}
    >
      {children}
    </Link>
  );
};
