
import BlogCard from './BlogCard';

const BlogSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard buttonText="GET STARTED" />
          <BlogCard buttonText="GET STARTED" />
          <BlogCard buttonText="GET STARTED" />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
