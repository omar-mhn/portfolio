import type { Metadata } from "next";
import CondicionesClient from "./CondicionesClient";

export const metadata: Metadata = {
  title: "Condiciones de contratación — Omar Mehenni",
  description: "Condiciones generales de contratación de los servicios de desarrollo de software de Omar Mehenni, freelance en Barcelona.",
};

export default function CondicionesPage() {
  return <CondicionesClient />;
}
