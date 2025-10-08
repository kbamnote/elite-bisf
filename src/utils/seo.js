// SEO utility functions for BIFS website

export const seoConfig = {
  siteName: 'BIFS Institute - Best Banking, Insurance & Financial Services Training',
  siteUrl: 'https://bifsinstitute.com',
  defaultTitle: 'Best BIFS Course in India | Top Banking & Finance Training Institute',
  defaultDescription: 'Join India\'s #1 BIFS training institute in Nagpur. Get certified in Banking, Insurance & Financial Services with 100% placement assistance. Enroll now!',
  defaultKeywords: 'BIFS course, banking course, insurance course, financial services training, BIFS institute Nagpur, banking job training, finance certification',
  author: 'BIFS Institute',
  twitterHandle: '@bifsinstitute',
  facebookPage: 'https://facebook.com/bifsinstitute',
  linkedinPage: 'https://linkedin.com/company/bifsinstitute',
  instagramPage: 'https://instagram.com/bifsinstitute'
};

export const generatePageSEO = (page) => {
  const seoData = {
    home: {
      title: 'Best BIFS Course in India | Top Banking & Finance Training Institute Nagpur',
      description: 'Join India\'s #1 BIFS training institute in Nagpur. Get certified in Banking, Insurance & Financial Services with 100% placement assistance. Expert faculty, industry curriculum.',
      keywords: 'best BIFS course India, BIFS course Nagpur, banking training institute, insurance course, financial services certification, job oriented BIFS program',
      canonical: '/'
    },
    about: {
      title: 'About BIFS Institute | Leading Banking & Finance Training Center Nagpur',
      description: 'Learn about BIFS Institute - Nagpur\'s premier banking and finance training center. 10+ years experience, 500+ successful placements, industry-expert faculty.',
      keywords: 'BIFS institute about, banking training center Nagpur, finance education, BIFS faculty, banking course achievements',
      canonical: '/about'
    },
    courses: {
      title: 'BIFS Courses | Banking, Insurance & Financial Services Training Programs',
      description: 'Explore comprehensive BIFS courses: Foundation Program, Advanced BIFS, Job-Oriented Training. Industry-aligned curriculum with placement guarantee.',
      keywords: 'BIFS courses, banking course syllabus, insurance training program, financial services certification, job oriented BIFS course',
      canonical: '/courses'
    },
    placement: {
    title: 'BIFS Placement | 100% Job Assistance | Banking & Finance Career Support',
    description: '500+ students placed in top banks & financial institutions. Get guaranteed placement assistance with our BIFS training programs. View success stories.',
    keywords: 'BIFS placement, banking job placement, finance career, BIFS job assistance, banking recruitment, financial services jobs',
    canonical: '/placements'
  },
    blog: {
      title: 'BIFS Blog | Banking & Finance Industry Insights | Career Tips',
      description: 'Stay updated with latest banking trends, finance career tips, BIFS exam preparation guides, and industry insights from our expert faculty.',
      keywords: 'BIFS blog, banking industry news, finance career tips, banking exam preparation, financial services trends',
      canonical: '/blog'
    },
    contact: {
      title: 'Contact BIFS Institute | Best Banking Training Center Nagpur | Admission',
      description: 'Contact BIFS Institute for admission inquiries. Visit our Nagpur center or call for course details, fees, and batch timings. Start your banking career today!',
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