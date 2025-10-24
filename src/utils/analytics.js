// Google Analytics 4 Integration
// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your actual GA4 ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const logPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const logEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  logEvent('click', 'Button', buttonName);
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  logEvent('submit', 'Form', formName);
};

// Track outbound links
export const trackOutboundLink = (url) => {
  logEvent('click', 'Outbound Link', url);
};

// Track downloads
export const trackDownload = (fileName) => {
  logEvent('download', 'File', fileName);
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  logEvent('click', 'Social Media', platform);
};

// Track contact interactions
export const trackContact = (method) => {
  logEvent('contact', 'Contact Method', method);
};

// Track service interest
export const trackServiceInterest = (serviceName) => {
  logEvent('interest', 'Service', serviceName);
};

