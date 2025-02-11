import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  const { t } = useTranslation("translation");
  return (
    <div className={classNames(cls.notFoundPage)}>{t("pageNotFound")}</div>
  );
};
