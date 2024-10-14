import React, { PropsWithChildren, ReactNode } from "react";

const ErrorMessages = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return <p className="text-red-600">{children}</p>;
};

export default ErrorMessages;
