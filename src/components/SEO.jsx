import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({
  title,
  description,
  keywords,
  robots,
  ogTitle,
  ogDescription,
  ogImage,
  schemaMarkup
}) => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://triole-it.com${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    const finalTitle = title || 'Triole IT | Local IT Support & Computer Repairs';
    document.title = finalTitle;

    // Helper function to create/update meta tags
    const setMetaTag = (attributeName, attributeValue, contentValue) => {
      if (!contentValue) return;
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 2. Set Standard Meta Tags
    setMetaTag('name', 'description', description || 'Triole IT provides friendly, professional, and affordable local IT support, computer and laptop repairs, network setup, and troubleshooting for home users and small businesses.');
    setMetaTag('name', 'keywords', keywords || 'local IT support, computer repair, laptop repair, home wifi setup, tech help, small business IT support, Vancouver');
    setMetaTag('name', 'robots', robots || 'index, follow');
    setMetaTag('name', 'author', 'Triole IT');

    // 3. Set Canonical URL Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Set Open Graph Meta Tags
    const finalOgTitle = ogTitle || title || 'Triole IT | Local IT Support & Computer Repairs';
    const finalOgDesc = ogDescription || description || 'Friendly, professional, and affordable local IT support and computer repairs for home users and small businesses.';
    const finalOgImage = ogImage || 'https://triole-it.com/logo.png';

    setMetaTag('property', 'og:title', finalOgTitle);
    setMetaTag('property', 'og:description', finalOgDesc);
    setMetaTag('property', 'og:image', finalOgImage);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Triole IT');

    // 5. Set Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalOgTitle);
    setMetaTag('name', 'twitter:description', finalOgDesc);
    setMetaTag('name', 'twitter:image', finalOgImage);

    // 6. Inject Schema.org JSON-LD structured data
    let schemaScript = document.getElementById('json-ld-schema');
    if (schemaMarkup) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'json-ld-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaMarkup);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    // Cleanup: remove dynamic script on unmount
    return () => {
      const scriptToRemove = document.getElementById('json-ld-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, keywords, robots, ogTitle, ogDescription, ogImage, canonicalUrl, schemaMarkup]);

  return null;
};

export default SEO;
