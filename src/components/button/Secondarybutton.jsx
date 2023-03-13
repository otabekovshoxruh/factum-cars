import classNames from "classnames";
import React from "react";

export default function SecondaryButton({
  onClik,
  className,
  children,
  ...props
}) {
  const cx = classNames([
    " bg-slate-200 text-black tracking-wide rounded duration-300 py-3 px-5 hover:bg-rose-700   m-9",
    className,
  ]);

  return (
    <button onClick={onClik} className={cx} {...props}>
      {children}
    </button>
  );
}
