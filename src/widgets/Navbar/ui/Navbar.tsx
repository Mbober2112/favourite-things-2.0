import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLInk/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [classNames(className)])}>
      <ThemeSwitcher />
      <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
        Главная
      </AppLink>
      <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
        О сайте
      </AppLink>
    </div>
  );
};
