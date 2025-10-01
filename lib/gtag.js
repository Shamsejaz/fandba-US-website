// lib/gtag.js
export const GA_TRACKING_ID = 'G-C2WTTH82ZQ';

// Track pageviews
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
