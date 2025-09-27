"use client";

import { EnhancedFloatingNavbar } from "@/components/enhancedFloatingNavbar";
import { useEffect, useState } from "react";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <EnhancedFloatingNavbar />
      {children}
    </>
  );
}