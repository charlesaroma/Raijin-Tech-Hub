import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const SEO = ({ 
  title,
  description,
  keywords,
  image,
  type
}) => {
  const location = useLocation();
  const currentUrl = `https://raijintechhub.com${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', currentUrl);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', currentUrl);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

  }, [title, description, keywords, image, type, currentUrl]);

  return null;
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string
};

SEO.defaultProps = {
  title: "Raijin Tech Hub | #1 IT Company Uganda | Best Software Development East Africa",
  description: "Number One IT company in Uganda & East Africa specializing in AI integration (Raijin AI Chatbot), custom software development, mobile app development, web development, and digital transformation. Best IT solutions provider in Africa with cutting-edge technology and 24/7 AI-powered support. Transform your business with Africa's leading tech innovators.",
  keywords: "best IT company Uganda, number one IT company Uganda, best IT company East Africa, best IT company Africa, top IT company Uganda, leading IT company East Africa, best software development company Uganda, best software development company East Africa, best software development company Africa, best web development company Uganda, best web development company East Africa, best web development company Africa, best mobile app development company Uganda, best mobile app development company East Africa, best mobile app development company Africa, AI integration Uganda, AI integration East Africa, Raijin AI chatbot, AI chatbot Uganda, AI-powered solutions Uganda, custom AI development Uganda, best AI company Uganda, best AI company East Africa, software development Uganda, IT consultancy Uganda, mobile app development Uganda, web development Uganda, digital transformation Uganda, tech company Uganda, IT solutions Uganda, number 1 tech company Uganda, top tech company East Africa, leading technology company Africa, professional IT services Uganda, professional IT services East Africa, software company Kampala, Raijin Tech Hub, 24/7 AI support Uganda",
  image: "https://raijintechhub.com/RaijinIcon.png",
  type: "website"
};

export default SEO;

