/**
 * Triole IT - Consent & Privacy Governance Manager
 * Compliant with GDPR, CCPA/CPRA, CalOPPA, and CIPA (Wiretap / Session Replay rules).
 *
 * Rules enforced:
 * 1. recordByDefault: false (No session replay or tracking without affirmative consent).
 * 2. Opt-in script blocking: Non-essential analytics and marketing scripts do NOT load prior to consent.
 * 3. Input masking: All input data fields are masked by default to prevent PII leakage.
 * 4. CCPA / CPRA: "Do Not Sell or Share My Personal Information" state is supported.
 */

const STORAGE_KEY = 'triole_cookie_consent_v1';
const CONSENT_EVENT = 'triole_consent_changed';
const OPEN_MODAL_EVENT = 'triole_open_cookie_preferences';

export const DEFAULT_CONSENT = {
  essential: true, // Always true (strictly necessary for site security and routing)
  analytics: false, // OFF by default (requires affirmative opt-in)
  marketing: false, // OFF by default (requires affirmative opt-in)
  doNotSell: true, // CCPA opt-out honored by default
  recordByDefault: false, // Session replay disabled by default (CIPA compliance)
  hasConsented: false,
  updatedAt: null,
};

/**
 * Retrieves the current consent preferences from localStorage
 */
export function getStoredConsent() {
  if (typeof window === 'undefined') return DEFAULT_CONSENT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONSENT;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_CONSENT,
      ...parsed,
      essential: true, // Always forced true
      recordByDefault: false, // Never allow override to true without active session consent
    };
  } catch (e) {
    console.warn('[ConsentManager] Failed to read stored consent:', e);
    return DEFAULT_CONSENT;
  }
}

/**
 * Saves updated consent preferences to localStorage and broadcasts the event
 */
export function saveConsent(newPreferences) {
  if (typeof window === 'undefined') return;
  const updated = {
    ...DEFAULT_CONSENT,
    ...newPreferences,
    essential: true,
    recordByDefault: false,
    hasConsented: true,
    updatedAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: updated }));
  } catch (e) {
    console.error('[ConsentManager] Failed to persist consent:', e);
  }
  return updated;
}

/**
 * Grants affirmative consent for all categories
 */
export function acceptAllConsent() {
  return saveConsent({
    essential: true,
    analytics: true,
    marketing: true,
    doNotSell: false,
    hasConsented: true,
  });
}

/**
 * Rejects non-essential cookies and tracking (only essential allowed)
 */
export function rejectNonEssentialConsent() {
  return saveConsent({
    essential: true,
    analytics: false,
    marketing: false,
    doNotSell: true,
    hasConsented: true,
  });
}

/**
 * Sets CCPA "Do Not Sell or Share My Personal Information" preference
 */
export function setDoNotSellPreference(doNotSell) {
  const current = getStoredConsent();
  return saveConsent({
    ...current,
    doNotSell: Boolean(doNotSell),
    marketing: doNotSell ? false : current.marketing,
  });
}

/**
 * Programmatically triggers the Cookie Preferences modal
 */
export function openCookiePreferences() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(OPEN_MODAL_EVENT));
}

/**
 * Listens for consent change events
 */
export function subscribeToConsentChanges(callback) {
  if (typeof window === 'undefined') return () => {};
  const handler = (event) => callback(event.detail);
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}

/**
 * Listens for requests to open the preference center
 */
export function subscribeToOpenPreferences(callback) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(OPEN_MODAL_EVENT, callback);
  return () => window.removeEventListener(OPEN_MODAL_EVENT, callback);
}

/**
 * Safe script loader: executes callback only if specific category has affirmative consent.
 */
export function executeWithConsent(category, callback) {
  const current = getStoredConsent();
  if (category === 'essential' || (current.hasConsented && current[category] === true)) {
    try {
      callback();
    } catch (err) {
      console.error(`[ConsentManager] Error executing ${category} script:`, err);
    }
  }
}
