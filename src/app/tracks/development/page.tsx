"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, GitBranch, Terminal } from "lucide-react";

export default function DevelopmentTrackPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Development Track</h1>
        <p className="text-lg text-muted-foreground">
          Master modern software development practices and tools
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Code2 className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Programming Fundamentals</CardTitle>
            <CardDescription>
              Learn core programming concepts and best practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Data structures and algorithms</li>
              <li>Object-oriented programming</li>
              <li>Clean code principles</li>
              <li>Testing methodologies</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <GitBranch className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Version Control</CardTitle>
            <CardDescription>
              Master Git and collaborative development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Git fundamentals</li>
              <li>Branching strategies</li>
              <li>Pull requests and code review</li>
              <li>Conflict resolution</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Terminal className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>DevOps Practices</CardTitle>
            <CardDescription>
              Learn modern deployment and operations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>CI/CD pipelines</li>
              <li>Container orchestration</li>
              <li>Infrastructure as code</li>
              <li>Monitoring and logging</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
