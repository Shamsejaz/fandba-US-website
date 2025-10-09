import Script from 'next/script';

interface OrganizationStructuredData {
  '@type': 'Organization';
  name: string;
  alternateName: string;
  url: string;
  logo: string;
  contactPoint: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
  }[];
  sameAs: string[];
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  foundingDate: string;
  identifier: string;
  email: string;
  vatID: string;
}

interface WebSiteStructuredData {
  '@type': 'WebSite';
  name: string;
  url: string;
  potentialAction: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
}

interface BreadcrumbListStructuredData {
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }[];
}

interface ServiceStructuredData {
  '@type': 'Service';
  serviceType: string;
  provider: {
    '@type': 'Organization';
    name: string;
  };
  areaServed: {
    '@type': 'Place';
    name: string;
  };
  offers: {
    '@type': 'Offer';
    priceSpecification: {
      '@type': 'PriceSpecification';
      priceCurrency: string;
    };
  };
}

export default function StructuredData({ 
  type, 
  data 
}: { 
  type: 'organization' | 'website' | 'breadcrumb' | 'service';
  data: OrganizationStructuredData | WebSiteStructuredData | BreadcrumbListStructuredData | ServiceStructuredData;
}) {
  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}