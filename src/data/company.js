/**
 * Triole IT - Central Company Information & Contact Constants
 */
export const COMPANY_INFO = {
  name: 'Triole IT',
  legalName: 'Triole IT',
  tagline: 'Friendly & Reliable Local IT Support',
  website: 'https://triole-it.com',
  email: 'admin@triole-it.com',
  supportEmail: 'admin@triole-it.com',
  formSubmitToken: '84721cd2e9504c59aaa2028425dd5e15',
  privacyEmail: 'privacy@triole-it.com',
  copyrightEmail: 'copyright@triole-it.com',
  storeUrl: 'https://store.triole-it.com',
  instagramUrl: 'https://instagram.com/triole_it',
  instagramHandle: '@triole_it',
  responseTime: '2–4 business hours',
  address: {
    street: 'Support Services HQ',
    city: 'Vancouver',
    region: 'BC',
    province: 'BC',
    country: 'Canada',
    countryCode: 'CA',
    display: 'Vancouver, BC, Canada & Surrounding Areas',
  },
  socials: {
    instagram: 'https://instagram.com/triole_it',
  },
  logoUrl: 'https://triole-it.com/logo.png',
};

export const COMPANY_LEGAL_INFO = {
  name: COMPANY_INFO.name,
  email: COMPANY_INFO.email,
  website: COMPANY_INFO.website,
  phone: 'Vancouver Local Support',
  address: {
    street: COMPANY_INFO.address.street,
    city: COMPANY_INFO.address.city,
    province: COMPANY_INFO.address.province,
    country: COMPANY_INFO.address.country,
  },
  unsubscribeUrl: `${COMPANY_INFO.website}/contacts?optout=true`,
};
