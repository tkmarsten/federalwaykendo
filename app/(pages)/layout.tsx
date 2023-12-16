import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="my-8 lg:my-16">{children}</div>;
}
