import React from 'react';
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

const ProjectDetailCard = ({ title, description, tags, children }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        {description && <CardDescription className="pt-2 text-lg">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="prose dark:prose-invert max-w-none">
        {children}
      </CardContent>
      {tags && tags.length > 0 && (
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  )
}

export default ProjectDetailCard; 