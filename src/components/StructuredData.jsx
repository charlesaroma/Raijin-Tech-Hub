import { useEffect } from 'react';
import PropTypes from 'prop-types';

const StructuredData = ({ type, data }) => {
  useEffect(() => {
    const defaultData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(defaultData);
    script.id = `structured-data-${type.toLowerCase()}`;
    
    // Remove existing script if it exists
    const existingScript = document.getElementById(script.id);
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.getElementById(script.id);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [type, data]);

  return null;
};

StructuredData.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object
};

StructuredData.defaultProps = {
  type: 'WebPage',
  data: {}
};

// Service Schema for Service Pages
export const ServiceStructuredData = ({ serviceName, description }) => {
  const serviceData = {
    'serviceType': serviceName,
    'provider': {
      '@type': 'Organization',
      'name': 'Raijin Tech Hub',
      'url': 'https://raijintechhub.com'
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'Uganda'
    },
    'description': description,
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock'
    }
  };

  return <StructuredData type="Service" data={serviceData} />;
};

ServiceStructuredData.propTypes = {
  serviceName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

// Breadcrumb Schema
export const BreadcrumbStructuredData = ({ items }) => {
  const breadcrumbData = {
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://raijintechhub.com${item.path}`
    }))
  };

  return <StructuredData type="BreadcrumbList" data={breadcrumbData} />;
};

BreadcrumbStructuredData.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })).isRequired
};

// FAQ Schema
export const FAQStructuredData = ({ faqs }) => {
  const faqData = {
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return <StructuredData type="FAQPage" data={faqData} />;
};

FAQStructuredData.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  })).isRequired
};

export default StructuredData;

