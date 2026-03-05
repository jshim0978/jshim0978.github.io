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
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        {description && <CardDescription className="pt-1 text-sm">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="prose dark:prose-invert max-w-none text-sm text-muted-foreground leading-relaxed">
        {children}
      </CardContent>
      {tags && tags.length > 0 && (
        <CardFooter>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-[10px]">{tag}</Badge>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  )
}

export default ProjectDetailCard;
