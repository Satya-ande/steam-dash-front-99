
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BlogCardProps {
  title?: string;
  buttonText: string;
  variant?: 'default' | 'featured';
}

const BlogCard = ({ title = "BLOG", buttonText, variant = 'default' }: BlogCardProps) => {
  return (
    <Card className={`blog-card-hover overflow-hidden ${variant === 'featured' ? 'h-64' : 'h-48'}`}>
      <div className="h-full bg-primary/90 flex flex-col justify-between p-6">
        <div>
          <h3 className="text-primary-foreground font-bold text-xl mb-2">{title}</h3>
        </div>
        <div>
          <Button 
            variant="ghost" 
            className="text-primary-foreground hover:bg-primary-foreground/20 p-0 h-auto font-semibold"
          >
            {buttonText} →
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
