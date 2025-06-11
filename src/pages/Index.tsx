
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BlogSection from '@/components/BlogSection';
import TopRankingBlogs from '@/components/TopRankingBlogs';
import MostPopularBlogs from '@/components/MostPopularBlogs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BlogSection />
      <TopRankingBlogs />
      <MostPopularBlogs />
      <Footer />
    </div>
  );
};

export default Index;
