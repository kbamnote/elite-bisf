import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, Clock, User, Tag, 
  Share2, Eye, ThumbsUp, BookOpen, Star,
  Facebook, Twitter, Linkedin, Copy, MessageCircle, ArrowRight
} from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';
import { SEOHelmet } from '../hooks/useSEO.jsx';
import BlogPostHero from '../components/blog/BlogPostHero';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post);

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <SEOHelmet
        title={`${post.title} | BIFS Institute Blog`}
        description={post.seo.metaDescription}
        keywords={post.seo.keywords}
        canonicalUrl={`https://bifsinstitute.com/blog/${post.slug}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": `https://bifsinstitute.com/blog-images/${post.slug}.jpg`,
          "author": {
            "@type": "Person",
            "name": post.author,
            "jobTitle": post.authorRole
          },
          "publisher": {
            "@type": "EducationalOrganization",
            "name": "BIFS Institute",
            "logo": {
              "@type": "ImageObject",
              "url": "https://bifsinstitute.com/logo.png"
            }
          },
          "datePublished": post.publishDate,
          "dateModified": post.publishDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://bifsinstitute.com/blog/${post.slug}`
          },
          "articleSection": post.category,
          "keywords": post.tags.join(", "),
          "wordCount": post.content.split(' ').length
        }}
        breadcrumbData={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` }
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <BlogPostHero post={post} onShare={sharePost} />

        {/* Article Content */}
        <article className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">Was this helpful?</span>
                  <button className="flex items-center text-green-600 hover:text-green-800">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Yes
                  </button>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>1.2k views</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>24 comments</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </article>

        {/* Author Bio */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl">{post.image}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    About {post.author}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{post.authorRole}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {post.author} is a seasoned professional with extensive experience in the banking and financial services industry. 
                    With a passion for education and career development, they regularly contribute insights to help aspiring 
                    professionals navigate their career paths successfully.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Related <span className="text-blue-600">Articles</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Continue exploring these related topics
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {relatedPost.category}
                        </span>
                        <div className="text-3xl">{relatedPost.image}</div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{relatedPost.readTime}</span>
                        <span>{new Date(relatedPost.publishDate).toLocaleDateString()}</span>
                      </div>
                      
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                      >
                        Read Article
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your BIFS Journey?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Transform your career with our industry-leading programs and expert guidance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;