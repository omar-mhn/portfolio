import type { Metadata } from "next";
import AvisoLegalClient from "./AvisoLegalClient";

export const metadata: Metadata = {
  title: "Aviso legal — Omar Mehenni",
  description: "Aviso legal e información del titular del sitio web omar-mhn.github.io/portfolio, conforme al artículo 10 de la LSSI-CE.",
};

export default function AvisoLegalPage() {
  return <AvisoLegalClient />;
}
