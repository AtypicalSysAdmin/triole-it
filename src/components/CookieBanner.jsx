import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Settings, X, Lock } from 'lucide-react';
import {
  getStoredConsent,
  saveConsent,
  acceptAllConsent,
  rejectNonEssentialConsent,
  subscribeToConsentChanges,
  subscribeToOpenPreferences,
} from '../utils/consentManager';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(() => !getStoredConsent().hasConsented);
  const [showModal, setShowModal] = useState(false);

  // Local state for modal toggles initialized lazily
  const [analyticsPref, setAnalyticsPref] = useState(() => getStoredConsent().analytics);
  const [marketingPref, setMarketingPref] = useState(() => getStoredConsent().marketing);
  const [doNotSellPref, setDoNotSellPref] = useState(() => getStoredConsent().doNotSell);

  useEffect(() => {
    const unsubChange = subscribeToConsentChanges((updated) => {
      setAnalyticsPref(updated.analytics);
      setMarketingPref(updated.marketing);
      setDoNotSellPref(updated.doNotSell);
      if (updated.hasConsented) {
        setShowBanner(false);
      }
    });

    const unsubOpen = subscribeToOpenPreferences(() => {
      const latest = getStoredConsent();
      setAnalyticsPref(latest.analytics);
      setMarketingPref(latest.marketing);
      setDoNotSellPref(latest.doNotSell);
      setShowModal(true);
    });

    return () => {
      unsubChange();
      unsubOpen();
    };
  }, []);

  const handleAcceptAll = () => {
    acceptAllConsent();
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectNonEssential = () => {
    rejectNonEssentialConsent();
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    saveConsent({
      essential: true,
      analytics: analyticsPref,
      marketing: marketingPref,
      doNotSell: doNotSellPref,
      hasConsented: true,
    });
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      {/* Floating Cookie Consent Banner */}
      {showBanner && !showModal && (
        <div
          role="region"
          aria-label="Cookie and Privacy Consent"
          className="cookie-consent-bar"
        >
          <div className="cookie-consent-inner">
            <div className="cookie-consent-content">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 mt-0.5">
                <Shield size={22} />
              </div>
              <div className="text-sm text-zinc-300 leading-relaxed">
                <p className="font-semibold text-white text-base mb-1">
                  We respect your privacy and data autonomy
                </p>
                <p>
                  Triole IT uses strictly essential cookies for site functionality. Non-essential cookies, analytics, and tracking scripts are <span className="text-white font-medium">disabled by default</span> and only load with your explicit permission. We never sell or share your personal data without your consent. Learn more in our{' '}
                  <Link to="/privacy" className="text-purple-300 hover:text-white underline font-medium">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>

            <div className="cookie-consent-actions">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="btn-secondary text-sm"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn-glass text-sm"
              >
                <Settings size={15} />
                <span>Customize</span>
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="btn-primary text-sm font-bold"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Cookie Preferences & CCPA Do Not Sell */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl rounded-xl border border-zinc-700 bg-[#121215] p-6 sm:p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <Shield size={24} className="text-purple-400" />
                <h2 id="cookie-modal-title" className="text-xl font-bold text-white">
                  Privacy &amp; Cookie Preferences
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white"
                aria-label="Close preferences"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              Customize how your data and cookies are handled. Essential cookies are required to deliver basic site navigation and security. You can adjust your choices or exercise your rights under GDPR, CCPA/CPRA, and Canadian privacy laws at any time.
            </p>

            <div className="space-y-4 mb-8">
              {/* Essential Cookies (Always On) */}
              <div className="p-4 rounded-lg border border-zinc-800 bg-[#18181c] flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white">Strictly Necessary Cookies</span>
                    <span className="badge badge-purple text-xs py-0.5 px-2">Required</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Essential for website security, user routing, and basic operations. Cannot be deactivated.
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-emerald-400 gap-1 mt-1">
                  <Lock size={14} />
                  <span>Always Active</span>
                </div>
              </div>

              {/* Analytics & Performance */}
              <div className="p-4 rounded-lg border border-zinc-800 bg-[#18181c] flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-white mb-1">Analytics &amp; Performance</div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Helps us understand aggregated page views and diagnose technical errors. Strictly anonymous, no session replay or screen capture without consent.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer min-h-[44px] min-w-[44px] justify-center">
                  <input
                    type="checkbox"
                    checked={analyticsPref}
                    onChange={(e) => setAnalyticsPref(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Toggle Analytics & Performance Cookies"
                  />
                  <div className="w-11 h-6 bg-zinc-700 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-purple-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[12px] after:left-[4px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              {/* Marketing & Third-Party Cookies */}
              <div className="p-4 rounded-lg border border-zinc-800 bg-[#18181c] flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-white mb-1">Marketing &amp; Social Links</div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Controls whether external marketing trackers or social network pixels can set identification cookies.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer min-h-[44px] min-w-[44px] justify-center">
                  <input
                    type="checkbox"
                    checked={marketingPref}
                    onChange={(e) => setMarketingPref(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Toggle Marketing & Social Tracking"
                  />
                  <div className="w-11 h-6 bg-zinc-700 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-purple-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[12px] after:left-[4px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>

              {/* CCPA: Do Not Sell or Share Personal Information */}
              <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-950/20 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-purple-300 mb-1">
                    Do Not Sell or Share My Personal Information (CCPA/CPRA)
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Triole IT does not sell personal information for monetary value. Keeping this switch ON ensures your data will never be shared with third parties for cross-context behavioral advertising.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer min-h-[44px] min-w-[44px] justify-center">
                  <input
                    type="checkbox"
                    checked={doNotSellPref}
                    onChange={(e) => setDoNotSellPref(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Toggle Do Not Sell or Share Personal Information"
                  />
                  <div className="w-11 h-6 bg-zinc-700 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-purple-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[12px] after:left-[4px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 border-t border-zinc-800 pt-5">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="btn-secondary text-sm"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="btn-primary text-sm font-semibold"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
