import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Import modular components
import CourseDetailHero from '../components/coursedetail/CourseDetailHero';
import CourseInfo from '../components/coursedetail/CourseInfo';
import CourseCurriculum from '../components/coursedetail/CourseCurriculum';
import CourseDetailSidebar from '../components/coursedetail/CourseDetailSidebar';
import RelatedCourses from '../components/coursedetail/RelatedCourses';
import CourseStats from '../components/coursedetail/CourseStats';
import CourseSuccessStories from '../components/coursedetail/CourseSuccessStories';
import CoursePartners from '../components/coursedetail/CoursePartners';

// Import course data
import { courses } from '../data/courses';

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-primary-600 hover:text-primary-700">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "Elite BIFS",
      "sameAs": "https://elitebifs.com"
    },
    "offers": {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": "INR"
    },
    "courseMode": "blended",
    "duration": course.duration,
    "educationalLevel": course.level
  };

  return (
    <>
      <Helmet>
        <title>{course.name} - Elite BIFS | Banking, Insurance & Financial Services Training</title>
        <meta name="description" content={course.description} />
        <meta name="keywords" content={`BIFS, Banking, Insurance, Financial Services, ${course.name}, Training, Course`} />
        <meta property="og:title" content={`${course.name} - Elite BIFS`} />
        <meta property="og:description" content={course.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${course.name} - Elite BIFS`} />
        <meta name="twitter:description" content={course.description} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <CourseDetailHero course={course} />
        {/* Course Statistics */}
        <CourseStats course={course} />

        {/* Course Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <CourseInfo course={course} />
                <CourseCurriculum course={course} />
                
                {/* Career Opportunities Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.careerOpportunities.map((career, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <CourseDetailSidebar course={course} />
              </div>
            </div>
          </div>
        </section>

        {/* Industry Partners */}
        <CoursePartners course={course} />

        {/* Success Stories */}
        <CourseSuccessStories course={course} />

        {/* Related Courses */}
        <RelatedCourses currentCourse={course} courses={courses} />
      </div>
    </>
  );
};

export default CourseDetail;