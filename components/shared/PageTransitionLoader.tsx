"use client";

// NextUI imports
import { Spinner } from "@nextui-org/react";

export default function PageTransitionLoader() {
  return (
    <div className="h-screen w-screen fixed z-50 bg-white">
      <Spinner size="lg" className="absolute top-0 bottom-0 mx-auto" />
    </div>
  );
}
