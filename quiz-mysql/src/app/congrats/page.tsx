import { Suspense } from "react";
import CongratsClient from "./CongratsClient";

export default function CongratsPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CongratsClient />
    </Suspense>
  );
}
