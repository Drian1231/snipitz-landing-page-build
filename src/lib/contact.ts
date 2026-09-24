export const CONTACT_EMAIL = "info@snipitz.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/snipitz";

export const mailto = (subject: string, body = "") =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;
