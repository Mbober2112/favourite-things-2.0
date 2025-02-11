import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation("translation");

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [classNames(className)])}>
      <p>{t("somethingWentWrong")}</p>
      <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>
        {t("reloadPage")}
      </Button>
    </div>
  );
};
