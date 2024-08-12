import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const StoryItem = ({ story }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg">
          <a
            href={story.url || `https://news.ycombinator.com/item?id=${story.objectID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center"
          >
            {story.title}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">
          {story.points} points by {story.author} | {story.num_comments} comments
        </p>
        <p className="text-sm mt-2">
          <a
            href={`https://news.ycombinator.com/item?id=${story.objectID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on Hacker News
          </a>
        </p>
      </CardContent>
    </Card>
  );
};

export default StoryItem;
