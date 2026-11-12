import type { Metadata } from "next";
import PrivacidadClient from "./PrivacidadClient";

export const metadata: Metadata = {
  title: "Política de privacidad — Omar Mehenni",
  description: "Política de privacidad del sitio web omar-mhn.github.io/portfolio, conforme al RGPD y la LOPDGDD.",
};

export default function PrivacidadPage() {
  return <PrivacidadClient />;
}
