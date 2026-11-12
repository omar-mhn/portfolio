"use client";

import LegalPageWrapper from "@/components/LegalPageWrapper";
import { useI18n } from "@/lib/i18n";

function AvisoLegalContent() {
  const { locale } = useI18n();
  const isEs = locale !== "en";

  if (!isEs) {
    return (
      <article className="prose-legal">
        <h1>Legal Notice</h1>
        <p className="lead">In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following identifying information is provided.</p>

        <h2>1. Owner details</h2>
        <ul>
          <li><strong>Name:</strong> Omar Mehenni</li>
          <li><strong>NIF/NIE:</strong> <span className="placeholder">[COMPLETAR]</span></li>
          <li><strong>Address:</strong> <span className="placeholder">[COMPLETAR]</span></li>
          <li><strong>Email:</strong> <span className="placeholder">[COMPLETAR]</span></li>
          <li><strong>Activity:</strong> Computer programming services (CNAE 6201)</li>
        </ul>

        <h2>2. Terms of use</h2>
        <p>Access to and use of this website implies acceptance of these terms. The owner reserves the right to modify the content of the website at any time without prior notice.</p>

        <h2>3. Intellectual property</h2>
        <p>All content on this website (texts, graphics, logos, icons, images, source code) is the exclusive property of Omar Mehenni or of third parties who have granted a licence for its use, and is protected by intellectual and industrial property law. Any reproduction, distribution, public communication or transformation is prohibited without the owner&apos;s prior written consent.</p>

        <h2>4. Limitation of liability</h2>
        <p>The owner is not liable for damages that may arise from the use of this website, nor for the accuracy or completeness of its content. Links to third-party websites are provided for information purposes only; the owner has no control over such sites and accepts no responsibility for their content.</p>

        <h2>5. Applicable law</h2>
        <p>These terms are governed by Spanish law. Any dispute shall be submitted to the courts of Barcelona.</p>

        <p className="updated">Last updated: November 2026</p>
      </article>
    );
  }

  return (
    <article className="prose-legal">
      <h1>Aviso legal</h1>
      <p className="lead">En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se facilitan los siguientes datos identificativos del titular.</p>

      <h2>1. Datos del titular</h2>
      <ul>
        <li><strong>Titular:</strong> Omar Mehenni</li>
        <li><strong>NIF/NIE:</strong> <span className="placeholder">[COMPLETAR]</span></li>
        <li><strong>Domicilio:</strong> <span className="placeholder">[COMPLETAR]</span></li>
        <li><strong>Correo electrónico:</strong> <span className="placeholder">[COMPLETAR]</span></li>
        <li><strong>Actividad:</strong> Servicios de programación informática (CNAE 6201)</li>
      </ul>

      <h2>2. Condiciones de uso</h2>
      <p>El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El titular se reserva el derecho a modificar los contenidos del sitio en cualquier momento y sin previo aviso.</p>

      <h2>3. Propiedad intelectual</h2>
      <p>Todos los contenidos de este sitio web (textos, gráficos, logotipos, iconos, imágenes, código fuente) son propiedad exclusiva de Omar Mehenni o de terceros que han otorgado licencia para su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin consentimiento previo y por escrito del titular.</p>

      <h2>4. Limitación de responsabilidad</h2>
      <p>El titular no se hace responsable de los daños que puedan derivarse del uso de este sitio web, ni de la exactitud o integridad de sus contenidos. Los enlaces a sitios web de terceros se facilitan a título meramente informativo; el titular no ejerce control alguno sobre dichos sitios y no asume responsabilidad alguna por sus contenidos.</p>

      <h2>5. Legislación aplicable</h2>
      <p>Las presentes condiciones se rigen por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales de Barcelona.</p>

      <p className="updated">Última actualización: noviembre de 2026</p>
    </article>
  );
}

export default function AvisoLegalClient() {
  return (
    <LegalPageWrapper>
      <AvisoLegalContent />
    </LegalPageWrapper>
  );
}
