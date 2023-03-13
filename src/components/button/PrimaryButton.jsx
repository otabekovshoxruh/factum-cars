import classNames from "classnames";
import React from "react";

export default function PrimaryButton({
  onClik,
  className,
  children,
  ...props
}) {
  const cx = classNames([
    "border-rose-600 rounded text-white bg-rose-600 tracking-wide duration-300 py-3 px-14 shadow-2xl hover:bg-rose-700 m-9 m-0 ",
    className,
  ]);

  return (
    <button onClick={onClik} className={cx} {...props}>
      {children}
    </button>
  );
}
