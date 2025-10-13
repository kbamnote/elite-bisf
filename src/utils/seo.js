// SEO utility functions for Elite Banking website

export const seoConfig = {
  siteName: 'Elite Banking - Trusted Financial Services & Digital Banking Solutions',
  siteUrl: 'https://elitebanking.com',
  defaultTitle: 'Elite Banking & Finance Solutions | Secure Digital Banking Services',
  defaultDescription: 'Transform your financial future with Elite Banking\'s comprehensive services. Secure digital banking, expert investment planning, and personalized financial solutions with 15+ years of trusted excellence.',
  defaultKeywords: 'elite banking, digital banking services, investment planning, financial advisory, secure banking, personal banking, business banking, wealth management, financial solutions',
  author: 'Elite Banking',
  twitterHandle: '@elitebanking',
  facebookPage: 'https://facebook.com/elitebanking',
  linkedinPage: 'https://linkedin.com/company/elitebanking',
  instagramPage: 'https://instagram.com/elitebanking'
};

export const generatePageSEO = (page) => {
  const seoData = {
    home: {
      title: 'Elite Banking & Finance Solutions | Secure Digital Banking Services',
      description: 'Transform your financial future with Elite Banking\'s comprehensive services. Secure digital banking, expert investment planning, and personalized financial solutions with 15+ years of trusted excellence.',
      keywords: 'elite banking, digital banking services, investment planning, financial advisory, secure banking, personal banking, business banking, wealth management, financial solutions',
      canonical: '/'
    },
    about: {
      title: 'About Elite Banking | Trusted Financial Partner | 15+ Years Excellence',
      description: 'Discover Elite Banking - your trusted financial partner with 15+ years of excellence. Comprehensive banking services, investment solutions, and personalized financial planning.',
      keywords: 'about elite banking, trusted financial partner, banking excellence, financial services company, investment advisory',
      canonical: '/about'
    },
    courses: {
      title: 'Banking Services | Personal & Business Banking | Investment Solutions',
      description: 'Explore Elite Banking\'s comprehensive services: Personal Banking, Investment Planning, Business Banking, and Digital Banking solutions tailored to your needs.',
      keywords: 'banking services, personal banking, business banking, investment services, digital banking solutions, financial planning',
      canonical: '/courses'
    },
    placement: {
    title: 'Client Success Stories | Elite Banking Testimonials | Financial Growth',
    description: '10,000+ satisfied clients trust Elite Banking for their financial journey. Read success stories and discover how we help achieve financial goals.',
    keywords: 'client testimonials, banking success stories, financial growth, satisfied customers, elite banking reviews',
    canonical: '/placements'
  },
    blog: {
      title: 'Financial Insights Blog | Banking Tips | Investment Strategies',
      description: 'Stay informed with Elite Banking\'s financial insights, investment strategies, banking tips, and market analysis from our expert financial advisors.',
      keywords: 'financial blog, investment tips, banking insights, market analysis, financial planning advice, wealth management',
      canonical: '/blog'
    },
    contact: {
      title: 'Contact Elite Banking | Get Financial Consultation | Banking Services',
      description: 'Contact Elite Banking for personalized financial consultation. Visit our offices or schedule a meeting to discuss your banking and investment needs.',
      keywords: 'BIFS institute contact, banking course admission Nagpur, BIFS institute address, course inquiry, admission process',
      canonical: '/contact'
    }
  };

  return seoData[page] || seoData.home;
};

export const generateStructuredData = (type, data) => {
  const baseData = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'organization':
      return {
        ...baseData,
        '@type': 'EducationalOrganization',
        name: 'BIFS Institute',
        alternateName: 'Banking Insurance Financial Services Institute',
        url: seoConfig.siteUrl,
        logo: `${seoConfig.siteUrl}/logo.png`,
        description: 'Leading BIFS training institute in Nagpur offering comprehensive Banking, Insurance & Financial Services courses with placement assistance.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Plot No. 123, BIFS Complex',
          addressLocality: 'Nagpur',
          addressRegion: 'Maharashtra',
          postalCode: '440001',
          addressCountry: 'IN'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-9876543210',
          contactType: 'Admissions',
          availableLanguage: ['English', 'Hindi', 'Marathi']
        },
        sameAs: [
          seoConfig.facebookPage,
          seoConfig.linkedinPage,
          seoConfig.instagramPage
        ]
      };

    case 'course':
      return {
        ...baseData,
        '@type': 'Course',
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: 'BIFS Institute'
        },
        courseCode: data.code,
        educationalCredentialAwarded: data.certification,
        timeRequired: data.duration,
        courseModeOfDelivery: 'Classroom',
        coursePrerequisites: data.prerequisites || 'Basic education qualification',
        offers: {
          '@type': 'Offer',
          category: 'Educational',
          priceCurrency: 'INR',
          price: data.price || '25000'
        }
      };

    case 'article':
      return {
        ...baseData,
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Person',
          name: data.author || 'BIFS Institute Faculty'
        },
        publisher: {
          '@type': 'Organization',
          name: 'BIFS Institute',
          logo: {
            '@type': 'ImageObject',
            url: `${seoConfig.siteUrl}/logo.png`
          }
        },
        datePublished: data.publishDate,
        dateModified: data.modifiedDate || data.publishDate,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${seoConfig.siteUrl}${data.url}`
        }
      };

    case 'breadcrumb':
      return {
        ...baseData,
        '@type': 'BreadcrumbList',
        itemListElement: data.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${seoConfig.siteUrl}${item.url}`
        }))
      };

    default:
      return baseData;
  }
};

export const generateOpenGraphTags = (pageData) => {
  return {
    'og:type': 'website',
    'og:site_name': seoConfig.siteName,
    'og:title': pageData.title,
    'og:description': pageData.description,
    'og:url': `${seoConfig.siteUrl}${pageData.canonical}`,
    'og:image': `${seoConfig.siteUrl}/og-image.jpg`,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': pageData.title,
    'og:locale': 'en_IN'
  };
};

export const generateTwitterTags = (pageData) => {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:site': seoConfig.twitterHandle,
    'twitter:creator': seoConfig.twitterHandle,
    'twitter:title': pageData.title,
    'twitter:description': pageData.description,
    'twitter:image': `${seoConfig.siteUrl}/twitter-image.jpg`,
    'twitter:image:alt': pageData.title
  };
};