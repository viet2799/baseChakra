import classNames from "classnames";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ILoadingPageProps {
  loadings?: boolean[];
  children?: React.ReactNode;
  tagName?: keyof JSX.IntrinsicElements;
  classname?: string;
}

const LoadingPage = ({
  loadings,
  children,
  tagName = "div",
  classname,
}: ILoadingPageProps) => {
  const LoadingElement = tagName;
  const loadingPage = loadings?.some((item: boolean) => item);
  const attributeDoom = document.getElementById("root");
  useEffect(() => {
    if (loadingPage && attributeDoom) {
      attributeDoom?.setAttribute("style", "overflow: hidden");
    } else {
      attributeDoom?.removeAttribute("style");
    }
  }, [loadingPage, attributeDoom]);
  return (
    <LoadingElement className={classNames("", classname)}>
      {loadingPage ? createPortal(<LoadingElement />, document.body) : null}
      {children}
    </LoadingElement>
  );
};

export default LoadingPage;
