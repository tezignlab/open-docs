import React from "react";
import Link from "@docusaurus/Link";
import $styles from "./index.module.css";
import clsx from "clsx";

export function LandingCard(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  to?: string;
}) {
  return (
    <Link
      className={clsx(
        $styles.card,
        "p-[36px] text-[#263035] bg-white flex rounded-[16px] w-[calc(50%_-_12px)] cursor-pointer no-underline hover:no-underline hover:text-[#263035]",
        props.className
      )}
      to={props.to}
    >
      {props.icon}
      <div className="flex flex-col justify-center ml-[16px] h-[80px]">
        <div className="text-2xl font-semibold">{props.title}</div>
        <div className="text-sm mt-[8px]">{props.description}</div>
      </div>
    </Link>
  );
}
