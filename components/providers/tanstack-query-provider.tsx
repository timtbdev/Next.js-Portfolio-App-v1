"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const TanStackQueryProvider: FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanStackQueryProvider;
