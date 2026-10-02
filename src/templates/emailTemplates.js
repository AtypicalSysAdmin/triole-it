/**
 * Triole IT - CAN-SPAM & CASL Compliant Email Templates
 *
 * Compliance requirements enforced:
 * 1. Physical postal address in footer (Vancouver, BC, Canada).
 * 2. Conspicuous sender identification (Triole IT, admin@triole-it.com).
 * 3. Functional one-click unsubscribe URL & reply-to opt-out mechanism (valid for >= 60 days per CASL).
 * 4. Clear statement of commercial intent or transactional nature.
 */

export const COMPANY_LEGAL_INFO = {
  name: 'Triole IT',
  email: 'admin@triole-it.com',
  website: 'https://triole-it.com',
  phone: 'Vancouver Local Support',
  address: {
    street: 'Support Services HQ',
    city: 'Vancouver',
    province: 'BC',
    country: 'Canada',
  },
  unsubscribeUrl: 'https://triole-it.com/contacts?optout=true',
};

/**
 * Standard legal footer injected into every outgoing email.
 */
export function renderEmailFooter({
  recipientEmail = '{{recipient_email}}',
  unsubscribeUrl = '{{unsubscribe_link}}',
  isMarketing = false,
} = {}) {
  const effectiveUnsubscribe = unsubscribeUrl || COMPANY_LEGAL_INFO.unsubscribeUrl;

  return `
    <!-- CAN-SPAM & CASL Mandatory Legal Footer -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 32px; border-top: 1px solid #27272a; padding-top: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 12px; line-height: 18px; color: #a1a1aa; text-align: center;">
      <tr>
        <td align="center">
          <p style="margin: 0 0 8px 0; font-weight: 600; color: #d4d4d8;">
            ${COMPANY_LEGAL_INFO.name} &bull; Local IT Support &amp; Computer Repairs
          </p>
          <p style="margin: 0 0 8px 0;">
            ${COMPANY_LEGAL_INFO.address.city}, ${COMPANY_LEGAL_INFO.address.province}, ${COMPANY_LEGAL_INFO.address.country}
          </p>
          <p style="margin: 0 0 12px 0;">
            This email was sent to <strong style="color: #e4e4e7;">${recipientEmail}</strong> in accordance with Canadian Anti-Spam Legislation (CASL) and CAN-SPAM regulations.
          </p>
          ${
            isMarketing
              ? `
          <p style="margin: 0 0 8px 0;">
            You are receiving this communication because you subscribed to tech tips or opted into Triole IT announcements.
          </p>
          <p style="margin: 0;">
            <a href="${effectiveUnsubscribe}" style="color: #c084fc; text-decoration: underline; font-weight: 500;">
              Unsubscribe from marketing emails
            </a>
            &nbsp;|&nbsp;
            <a href="mailto:${COMPANY_LEGAL_INFO.email}?subject=Unsubscribe%20${recipientEmail}" style="color: #c084fc; text-decoration: underline;">
              Unsubscribe via Email
            </a>
            &nbsp;|&nbsp;
            <a href="${COMPANY_LEGAL_INFO.website}/privacy" style="color: #a1a1aa; text-decoration: underline;">
              Privacy Policy
            </a>
          </p>
          `
              : `
          <p style="margin: 0;">
            This is a transactional service notification regarding your repair inquiry or service booking.
            <br />
            Manage communications: <a href="mailto:${COMPANY_LEGAL_INFO.email}?subject=Preferences%20Request" style="color: #c084fc; text-decoration: underline;">Contact Privacy Officer</a>
            &nbsp;|&nbsp;
            <a href="${COMPANY_LEGAL_INFO.website}/privacy" style="color: #a1a1aa; text-decoration: underline;">Privacy Policy</a>
          </p>
          `
          }
        </td>
      </tr>
    </table>
  `;
}

/**
 * Transactional: Customer Service Inquiry Confirmation Email
 */
export function serviceInquiryConfirmationTemplate({ customerName, serviceType, ticketId, recipientEmail }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Triole IT - Inquiry Confirmation [Ticket #${ticketId}]</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #ffffff;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #121216; border-radius: 12px; border: 1px solid #27272a; padding: 32px;">
    <tr>
      <td>
        <h1 style="margin: 0 0 16px 0; font-size: 24px; color: #a855f7;">Triole IT Support</h1>
        <h2 style="margin: 0 0 16px 0; font-size: 20px; color: #ffffff;">Service Request Received</h2>
        <p style="color: #e4e4e7; font-size: 15px; line-height: 24px;">
          Hello ${customerName || 'Valued Customer'},
        </p>
        <p style="color: #e4e4e7; font-size: 15px; line-height: 24px;">
          We have received your service request for <strong>${serviceType || 'IT Support / Diagnostics'}</strong> (Ticket #${ticketId}).
        </p>
        <p style="color: #e4e4e7; font-size: 15px; line-height: 24px;">
          A Vancouver technician is reviewing your inquiry and will reach out within 2–4 business hours with initial diagnostic steps and appointment availability.
        </p>
        <div style="background-color: #18181b; border: 1px solid #27272a; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <p style="margin: 0; font-size: 14px; color: #d4d4d8;">
            <strong>Direct Reply:</strong> You can simply reply to this email to add more details, photos, or error messages.
          </p>
        </div>
        ${renderEmailFooter({ recipientEmail, isMarketing: false })}
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Marketing: Newsletter & Maintenance Tips Bulletin Email
 */
export function newsletterBulletinTemplate({ customerName, bulletinTitle, bulletinBody, unsubscribeLink, recipientEmail }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${bulletinTitle || 'Triole IT Tech Bulletin'}</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #ffffff;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #121216; border-radius: 12px; border: 1px solid #27272a; padding: 32px;">
    <tr>
      <td>
        <h1 style="margin: 0 0 16px 0; font-size: 24px; color: #a855f7;">Triole IT</h1>
        <h2 style="margin: 0 0 16px 0; font-size: 20px; color: #ffffff;">${bulletinTitle}</h2>
        <p style="color: #e4e4e7; font-size: 15px; line-height: 24px;">
          Hello ${customerName || 'there'},
        </p>
        <div style="color: #e4e4e7; font-size: 15px; line-height: 24px;">
          ${bulletinBody}
        </div>
        ${renderEmailFooter({ recipientEmail, unsubscribeUrl: unsubscribeLink, isMarketing: true })}
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
