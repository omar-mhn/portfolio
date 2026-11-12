"use client";

import LegalPageWrapper from "@/components/LegalPageWrapper";
import { useI18n } from "@/lib/i18n";

function PrivacidadContent() {
  const { locale } = useI18n();
  const isEs = locale !== "en";

  if (!isEs) {
    return (
      <article className="prose-legal">
        <h1>Privacy Policy</h1>
        <p className="lead">In compliance with Regulation (EU) 2016/679 (GDPR) and Organic Law 3/2018 (LOPDGDD), this privacy policy explains how personal data collected through this website is processed.</p>

        <h2>1. Data controller</h2>
        <ul>
          <li><strong>Name:</strong> Omar Mehenni</li>
          <li><strong>NIF/NIE:</strong> <span className="placeholder">[COMPLETAR]</span></li>
          <li><strong>Address:</strong> <span className="placeholder">[COMPLETAR]</span></li>
          <li><strong>Email:</strong> <span className="placeholder">[COMPLETAR]</span></li>
        </ul>

        <h2>2. Data collected and purposes</h2>
        <p>When you contact the owner via email or any contact method provided on the website, the following data may be collected: name, email address, and the content of your message. This data is used solely to reply to your enquiry and, where applicable, to manage the resulting professional relationship.</p>

        <h2>3. Legal basis</h2>
        <p>The legal basis for processing is the legitimate interest of the data controller in responding to received requests (Article 6(1)(f) GDPR) and, where applicable, the execution of a pre-contractual relationship (Article 6(1)(b) GDPR).</p>

        <h2>4. Data retention</h2>
        <p>Personal data will be retained only for as long as necessary for the purpose for which it was collected and, in any event, for the minimum period required by applicable law.</p>

        <h2>5. Recipients</h2>
        <p>Your data will not be transferred to third parties, except where legally required. The website is hosted on GitHub Pages (GitHub, Inc.), whose privacy policy is available at <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">github.com</a>.</p>

        <h2>6. Cookies and tracking</h2>
        <p>This website does not use analytics cookies or any non-essential tracking tools. Only strictly necessary technical cookies may be set by the browser or the hosting platform.</p>

        <h2>7. Your rights</h2>
        <p>You have the right to access, rectify, erase, object to, restrict, and port your personal data. To exercise any of these rights, please contact the owner at the email address above, enclosing a copy of your identity document.</p>
        <p>You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) at <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>

        <p className="updated">Last updated: November 2026</p>
      </article>
    );
  }

  return (
    <article className="prose-legal">
      <h1>Política de privacidad</h1>
      <p className="lead">En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa de los siguientes extremos relativos al tratamiento de datos personales recabados a través de este sitio web.</p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Titular:</strong> Omar Mehenni</li>
        <li><strong>NIF/NIE:</strong> <span className="placeholder">[COMPLETAR]</span></li>
        <li><strong>Domicilio:</strong> <span className="placeholder">[COMPLETAR]</span></li>
        <li><strong>Correo electrónico:</strong> <span className="placeholder">[COMPLETAR]</span></li>
      </ul>

      <h2>2. Datos recabados y finalidades</h2>
      <p>Cuando el usuario contacta con el titular a través del correo electrónico u otro medio de contacto facilitado en el sitio web, se pueden recoger los siguientes datos: nombre, dirección de correo electrónico y el contenido del mensaje. Dichos datos se utilizan exclusivamente para atender la consulta recibida y, en su caso, gestionar la relación profesional derivada.</p>

      <h2>3. Base jurídica</h2>
      <p>La base jurídica del tratamiento es el interés legítimo del responsable en atender las solicitudes recibidas (art. 6.1.f RGPD) y, en su caso, la ejecución de una relación precontractual (art. 6.1.b RGPD).</p>

      <h2>4. Plazo de conservación</h2>
      <p>Los datos personales se conservarán únicamente durante el tiempo necesario para la finalidad para la que fueron recabados y, en todo caso, durante el plazo mínimo exigido por la normativa aplicable.</p>

      <h2>5. Destinatarios</h2>
      <p>Los datos no se cederán a terceros salvo obligación legal. El sitio web está alojado en GitHub Pages (GitHub, Inc.), cuya política de privacidad está disponible en <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">github.com</a>.</p>

      <h2>6. Cookies y rastreo</h2>
      <p>Este sitio web no utiliza cookies de analítica ni herramientas de seguimiento no esenciales. Únicamente pueden establecerse cookies técnicas estrictamente necesarias por parte del navegador o de la plataforma de alojamiento.</p>

      <h2>7. Derechos del interesado</h2>
      <p>El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de los datos dirigiéndose al responsable mediante correo electrónico a la dirección indicada anteriormente, adjuntando copia de su documento de identidad.</p>
      <p>Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>

      <p className="updated">Última actualización: noviembre de 2026</p>
    </article>
  );
}

export default function PrivacidadClient() {
  return (
    <LegalPageWrapper>
      <PrivacidadContent />
    </LegalPageWrapper>
  );
}
