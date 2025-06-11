
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
              D
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Blogs
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Categories
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About us
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>
          
          {/* Search and Button */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-10 pr-4"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Search
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
