"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRequestLoginLink as useLogin } from "@/queries/authQueries";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_VERSION, CLIENT_URL, SERVER_URL } from "@/config/env";
import { useState } from "react";
import { toast } from "sonner";

export function LoginForm() {
  const [requestPending, setRequestPending] = useState(false);

  const loginMutation = useMutation({
    mutationFn: ({ email, fromUrl }: { email: string; fromUrl?: string }) => {
      const urlParams = new URLSearchParams();
      urlParams.append("email", email);
      return axios({
        method: "POST",
        url: `${SERVER_URL}/${API_VERSION}/auth/login`,
        params: {
          from_url: fromUrl,
        },
        data: urlParams,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    },
    onSuccess: () => {
      setRequestPending(false);
      toast.success("Login link sent to your email");
    },
    onError: (e) => {
      setRequestPending(false);
      toast.error("Failed to send login link");
      console.error(e);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    loginMutation.mutate({ email, fromUrl: CLIENT_URL });
  };

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome to the tournament</CardTitle>
          <CardDescription>
            Verify your identity to continue with your name and email address
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    disabled={loginMutation.isPending}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full cursor-pointer"
                  disabled={loginMutation.isPending}
                >
                  Send confirmation link
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
