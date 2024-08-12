import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import StoryItem from "../components/StoryItem";

const fetchStories = async () => {
  const response = await fetch(
    "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Index = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["hackerNewsStories"],
    queryFn: fetchStories,
  });

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Hacker News - Latest 50 Stories</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[70vh]">
            {data.hits.map((story) => (
              <StoryItem key={story.objectID} story={story} />
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
