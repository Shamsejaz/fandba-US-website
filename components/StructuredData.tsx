import Script from 'next/script';

interface OrganizationStructuredData {
  '@type': 'Organization';
  name: string;
  alternateName?: string;
  url: string;
  logo?: string;
  contactPoint: Array<{
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    areaServed?: string;
    availableLanguage?: string;
  }>;
  sameAs?: string[];
  address?: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  };
  foundingDate?: string;
  identifier?: string;
  email?: string;
  vatID?: string;
}

interface LocalBusinessStructuredData {
  '@type': 'LocalBusiness';
  name: string;
  image?: string[];
  telephone: string;
  email?: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  url: string;
  sameAs?: string[];
  openingHours?: string;
  openingHoursSpecification?: Array<{
    '@type': 'OpeningHoursSpecification';
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    reviewCount: number;
  };
  servesCurrencies?: string[];
}

interface ArticleStructuredData {
  '@type': 'Article';
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
  headline: string;
  description: string;
  image?: string | string[];
  author: {
    '@type': 'Person';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
      width: number;
      height: number;
    };
  };
  datePublished: string;
  dateModified: string;
}

interface BreadcrumbStructuredData {
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }>;
}

interface FAQStructuredData {
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

interface ProductStructuredData {
  '@type': 'Product';
  name: string;
  image?: string | string[];
  description?: string;
  brand?: {
    '@type': 'Brand';
    name: string;
  };
  offers: {
    '@type': 'Offer';
    price: string;
    priceCurrency: string;
    availability: string;
    seller?: {
      '@type': 'Organization';
      name: string;
    };
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    reviewCount: number;
  };
  review?: Array<{
    '@type': 'Review';
    reviewBody: string;
    datePublished: string;
    reviewRating: {
      '@type': 'Rating';
      ratingValue: number;
    };
    author: {
      '@type': 'Person';
      name: string;
    };
  }>;
}

interface ServiceStructuredData {
  '@type': 'Service';
  serviceType: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
    logo?: string;
  };
  areaServed?: string | {
    '@type': 'Place';
    name: string;
  };
  serviceOutput?: {
    '@type': 'Thing';
    name: string;
  };
  offers?: {
    '@type': 'Offer';
    price: string;
    priceCurrency: string;
  };
  description?: string;
  audience?: {
    '@type': 'Audience';
    name: string;
  };
}

interface StructuredDataProps {
  type: 
    | 'Organization' 
    | 'LocalBusiness' 
    | 'Article' 
    | 'BreadcrumbList' 
    | 'FAQPage' 
    | 'Product' 
    | 'Service';
  data: 
    | OrganizationStructuredData 
    | LocalBusinessStructuredData 
    | ArticleStructuredData 
    | BreadcrumbStructuredData 
    | FAQStructuredData 
    | ProductStructuredData 
    | ServiceStructuredData;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  // Create structured data object, ensuring @type is preserved
  const { '@type': dataType, ...otherData } = data as any;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...otherData,
  };

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}