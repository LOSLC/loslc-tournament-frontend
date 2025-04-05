"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Lock, FileWarning, Network } from "lucide-react";

export default function SecurityTrackPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Security Track</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Master cybersecurity fundamentals and advanced techniques to protect
          digital assets and systems.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Fundamentals</CardTitle>
              <CardDescription>
                Core security concepts and best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Security Principles</li>
                <li>• Threat Modeling</li>
                <li>• Risk Assessment</li>
                <li>• Security Controls</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lock className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Application Security</CardTitle>
              <CardDescription>
                Secure coding and vulnerability prevention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Secure Coding Practices</li>
                <li>• Input Validation</li>
                <li>• Authentication & Authorization</li>
                <li>• Session Management</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Network className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Network Security</CardTitle>
              <CardDescription>
                Protecting network infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Network Protocols</li>
                <li>• Firewall Configuration</li>
                <li>• Intrusion Detection</li>
                <li>• VPN Setup</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileWarning className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Incident Response</CardTitle>
              <CardDescription>Handling security incidents</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Incident Detection</li>
                <li>• Response Planning</li>
                <li>• Forensics Basics</li>
                <li>• Recovery Procedures</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
