const SkipLink = ({ href = "#main-content", children = "Skip to main content" }) => {
  return (
    <a
      href={href}
      className="skip-nav sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      tabIndex={0}
    >
      {children}
    </a>
  );
};

export default SkipLink;