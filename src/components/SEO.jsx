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
  ogImageAlt,
  ogLocale = 'en_CA',
  breadcrumbs,
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
    const finalOgImageAlt = ogImageAlt || 'Triole IT - Local IT Support & Computer Repair Services';

    setMetaTag('property', 'og:title', finalOgTitle);
    setMetaTag('property', 'og:description', finalOgDesc);
    setMetaTag('property', 'og:image', finalOgImage);
    setMetaTag('property', 'og:image:alt', finalOgImageAlt);
    setMetaTag('property', 'og:locale', ogLocale);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Triole IT');

    // 5. Set Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalOgTitle);
    setMetaTag('name', 'twitter:description', finalOgDesc);
    setMetaTag('name', 'twitter:image', finalOgImage);
    setMetaTag('name', 'twitter:image:alt', finalOgImageAlt);

    // 6. Build and inject Schema.org JSON-LD structured data
    const schemaNodes = [];
    if (schemaMarkup) {
      if (Array.isArray(schemaMarkup)) {
        schemaNodes.push(...schemaMarkup);
      } else {
        schemaNodes.push(schemaMarkup);
      }
    }

    if (breadcrumbs && Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': crumb.name,
          'item': crumb.item.startsWith('http') ? crumb.item : `https://triole-it.com${crumb.item}`
        }))
      };
      schemaNodes.push(breadcrumbSchema);
    }

    let schemaScript = document.getElementById('json-ld-schema');
    if (schemaNodes.length > 0) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'json-ld-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      
      const payload = schemaNodes.length === 1 
        ? schemaNodes[0] 
        : {
            '@context': 'https://schema.org',
            '@graph': schemaNodes.map(node => {
              const cleanNode = { ...node };
              delete cleanNode['@context'];
              return cleanNode;
            })
          };
      schemaScript.textContent = JSON.stringify(payload);
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
  }, [title, description, keywords, robots, ogTitle, ogDescription, ogImage, ogImageAlt, ogLocale, canonicalUrl, schemaMarkup, breadcrumbs]);

  return null;
};

export default SEO;
