import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DynamicPage() {
  const { slug } = useParams();
  const [data, setData] = useState<{ title: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Placeholder for data fetching logic
    // e.g., fetch(`/api/content/${slug}`)
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulated fetch
        setTimeout(() => {
          setData({ 
            title: `DYNAMIC ROUTE: /${slug?.toUpperCase()}`, 
            content: `This is a dynamically generated page for the slug "${slug}". In a production environment, this content would be fetched from a CMS or database, allowing the site to scale infinitely without adding new hardcoded routes.` 
          });
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="space-y-12 max-w-3xl">
        <div className="animate-pulse font-mono text-xl">_ FETCHING DATA FOR /{slug}...</div>
      </div>
    );
  }

  return (
    <div className="space-y-12 max-w-3xl">
      <header className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-display">{data?.title}</h2>
        <div className="h-1 w-24 bg-terminal-green"></div>
      </header>
      <div className="space-y-8 text-lg leading-relaxed">
        <p>{data?.content}</p>
      </div>
    </div>
  );
}
