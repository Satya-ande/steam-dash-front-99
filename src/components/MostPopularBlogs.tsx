
import { Button } from '@/components/ui/button';
import BlogCard from './BlogCard';

const MostPopularBlogs = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Most popular Blogs
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <BlogCard title="ABC Blog" buttonText="SEE BLOG" variant="featured" />
          </div>
          <div>
            <BlogCard title="ABC Blog" buttonText="SEE BLOG" variant="featured" />
          </div>
          <div>
            <BlogCard title="ABC Blog" buttonText="SEE BLOG" variant="featured" />
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
            SEE ALL →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MostPopularBlogs;
