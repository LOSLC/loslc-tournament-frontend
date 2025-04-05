import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Terminal, Shield, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
          LOSLC & ETHIX Competition 2025
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join the Linux & Open Source Lovers Competition in collaboration with
          ETHIX community. Showcase your skills in development and
          cybersecurity.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/login">Sign in Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#tracks">View Tracks</Link>
          </Button>
        </div>
      </div>

      {/* Competition Tracks */}
      <div id="tracks" className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="relative overflow-hidden">
          <CardHeader>
            <Terminal className="h-8 w-8 mb-2" />
            <CardTitle>Development Track</CardTitle>
            <CardDescription>
              Build innovative open-source solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                <span>Create impactful open-source projects</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Collaborate with the community</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/tracks/development">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardHeader>
            <Shield className="h-8 w-8 mb-2" />
            <CardTitle>Security Track</CardTitle>
            <CardDescription>Master cybersecurity challenges</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                <span>Solve real-world security scenarios</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Learn from security experts</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/tracks/security">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Competition Rules */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle>Competition Rules</CardTitle>
          <CardDescription>
            Important guidelines for all participants
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">General Rules</h3>
              <ul className="space-y-2">
                <li>All submissions must be original work</li>
                <li>Participants must follow code of conduct</li>
                <li>Teams of up to 4 members allowed</li>
                <li>Multiple track participation is permitted</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Submission Guidelines</h3>
              <ul className="space-y-2">
                <li>Projects must be open source</li>
                <li>Documentation is required</li>
                <li>Code must be well-commented</li>
                <li>Include setup instructions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
