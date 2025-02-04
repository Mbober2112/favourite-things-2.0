import React from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import LightThemeIcon from "shared/assets/icons/light-theme-icon.svg";
import DarkThemeIcon from "shared/assets/icons/dark-theme-icon.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};
