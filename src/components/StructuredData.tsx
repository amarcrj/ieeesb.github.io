export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "IEEE Student Branch IIITNR",
    "alternateName": "IEEE Student Branch at International Institute of Information Technology, Naya Raipur",
    "url": "https://ieee-iiitnr.edu.in",
    "logo": "https://ieee-iiitnr.edu.in/1000119890.png",
    "image": "https://ieee-iiitnr.edu.in/1000119890.png",
    "description": "IEEE Student Branch at International Institute of Information Technology, Naya Raipur - Fostering technological innovation and professional development among students in electrical engineering, computer science, and related fields.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Chhattisgarh",
      "addressLocality": "Naya Raipur"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-1234567890",
      "contactType": "customer support",
      "email": "ieee.studentbranch@university.edu"
    },
    "sameAs": [
      "https://www.facebook.com/ieee.iiitnr",
      "https://www.twitter.com/ieee_iiitnr",
      "https://www.linkedin.com/company/ieee-iiitnr",
      "https://www.instagram.com/ieee_iiitnr"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "IEEE",
      "url": "https://www.ieee.org"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "International Institute of Information Technology, Naya Raipur",
      "url": "https://www.iiitnr.ac.in"
    },
    "foundingDate": "2010",
    "keywords": "IEEE, Student Branch, IIIT Naya Raipur, Electrical Engineering, Computer Science, Technology, Innovation, Research",
    "slogan": "Advancing Technology for Humanity"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}