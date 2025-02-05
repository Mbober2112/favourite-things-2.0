import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLInk/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [classNames(className)])}>
      <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
        {t("main")}
      </AppLink>
      <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
        {t("aboutPage")}
      </AppLink>
    </div>
  );
};
