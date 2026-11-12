"use client";

import LegalPageWrapper from "@/components/LegalPageWrapper";
import { useI18n } from "@/lib/i18n";

function CondicionesContent() {
  const { locale } = useI18n();
  const isEs = locale !== "en";

  if (!isEs) {
    return (
      <article className="prose-legal">
        <h1>Terms of Service</h1>
        <p className="lead">These general terms govern the engagement of software development services provided by Omar Mehenni (hereinafter &quot;the Freelancer&quot;), a self-employed professional based in Barcelona, Spain.</p>

        <h2>1. Engagement process</h2>
        <p>All engagements follow this sequence: (1) the Client submits a request; (2) the Freelancer provides a written quote free of charge and without commitment; (3) the Client accepts the quote in writing; (4) work begins.</p>

        <h2>2. Payment — project-based work</h2>
        <p>For fixed-price projects: 50 % is due upon acceptance of the quote, and the remaining 50 % is due upon delivery of the final work. Invoices include VAT at the applicable rate (21 %). Payment must be made by bank transfer within <strong>15 calendar days</strong> of the invoice date.</p>

        <h2>3. Maintenance and support</h2>
        <p>Maintenance and technical support services are invoiced monthly according to the agreed scope. Payment terms are the same as above.</p>

        <h2>4. Delivery timelines and scope changes</h2>
        <p>Agreed delivery timelines are set out in the written quote. Any modification to the originally agreed scope (new features, significant design changes, additional integrations) will be treated as a new engagement and will require a separate quote.</p>

        <h2>5. Intellectual property</h2>
        <p>All rights to the developed code and deliverables are transferred to the Client upon full payment of the agreed price. Until full payment is received, all intellectual property rights remain with the Freelancer.</p>

        <h2>6. Confidentiality</h2>
        <p>The Freelancer undertakes to treat all information provided by the Client as strictly confidential and not to disclose it to third parties without prior written consent, except where required by law.</p>

        <h2>7. Warranty</h2>
        <p>The Freelancer guarantees the correction of functional errors (bugs) reported within <strong>30 calendar days</strong> of delivery, at no additional charge, provided that the error is attributable to the original development and the deliverable has not been modified by the Client.</p>

        <h2>8. Cancellation</h2>
        <p>Either party may cancel the engagement by giving written notice. If the Client cancels after accepting the quote, the Freelancer retains the initial 50 % deposit as compensation for work already carried out. If the Freelancer cancels, any amounts received beyond the value of work already completed will be refunded.</p>

        <h2>9. Applicable law and jurisdiction</h2>
        <p>These terms are governed by Spanish law. Any dispute arising from the engagement that cannot be resolved amicably shall be submitted to the courts of Barcelona.</p>

        <p className="updated">Last updated: November 2026</p>
      </article>
    );
  }

  return (
    <article className="prose-legal">
      <h1>Condiciones de contratación</h1>
      <p className="lead">Las presentes condiciones generales regulan la contratación de los servicios de desarrollo de software prestados por Omar Mehenni (en adelante, &quot;el Freelance&quot;), profesional autónomo con domicilio en Barcelona (España).</p>

      <h2>1. Proceso de contratación</h2>
      <p>Todo encargo sigue el siguiente proceso: (1) el Cliente remite una solicitud; (2) el Freelance emite un presupuesto escrito, gratuito y sin compromiso; (3) el Cliente acepta el presupuesto por escrito; (4) se inicia el trabajo.</p>

      <h2>2. Pago en proyectos cerrados</h2>
      <p>En proyectos a precio cerrado, se abonará el <strong>50 % a la aceptación del presupuesto</strong> y el <strong>50 % restante a la entrega</strong> del trabajo finalizado. Las facturas incluyen IVA al tipo vigente (21 %). El pago se realiza exclusivamente por transferencia bancaria en un plazo máximo de <strong>15 días naturales</strong> desde la fecha de factura.</p>

      <h2>3. Mantenimiento y soporte</h2>
      <p>Los servicios de mantenimiento y soporte técnico se facturan mensualmente según el alcance acordado. Las condiciones de pago son las mismas que las indicadas en el apartado anterior.</p>

      <h2>4. Plazos de entrega y modificaciones del alcance</h2>
      <p>Los plazos de entrega acordados se detallan en el presupuesto escrito. Cualquier modificación del alcance original (nuevas funcionalidades, cambios de diseño significativos, integraciones adicionales) se considerará un nuevo encargo y requerirá un presupuesto independiente.</p>

      <h2>5. Propiedad intelectual</h2>
      <p>Una vez abonado íntegramente el precio acordado, todos los derechos sobre el código y los entregables desarrollados se ceden al Cliente. Hasta la recepción del pago completo, la propiedad intelectual pertenece al Freelance.</p>

      <h2>6. Confidencialidad</h2>
      <p>El Freelance se compromete a tratar toda la información facilitada por el Cliente como estrictamente confidencial y a no divulgarla a terceros sin consentimiento previo por escrito, salvo obligación legal.</p>

      <h2>7. Garantía</h2>
      <p>El Freelance garantiza la corrección de errores funcionales (bugs) comunicados en los <strong>30 días naturales siguientes a la entrega</strong>, sin coste adicional, siempre que el error sea imputable al desarrollo original y el entregable no haya sido modificado por el Cliente.</p>

      <h2>8. Desistimiento y cancelación</h2>
      <p>Cualquiera de las partes puede cancelar el encargo mediante notificación escrita. Si el Cliente cancela tras aceptar el presupuesto, el Freelance retiene el depósito inicial del 50 % en concepto de compensación por el trabajo ya realizado. Si el Freelance cancela, reembolsará los importes recibidos que excedan el valor del trabajo ya ejecutado.</p>

      <h2>9. Legislación aplicable y jurisdicción</h2>
      <p>Las presentes condiciones se rigen por la legislación española. Cualquier conflicto derivado de la prestación de servicios que no pueda resolverse de forma amistosa se someterá a los juzgados y tribunales de Barcelona.</p>

      <p className="updated">Última actualización: noviembre de 2026</p>
    </article>
  );
}

export default function CondicionesClient() {
  return (
    <LegalPageWrapper>
      <CondicionesContent />
    </LegalPageWrapper>
  );
}
