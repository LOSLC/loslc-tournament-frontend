"use client";
import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_VERSION, SERVER_URL } from "@/config/env";
import { User } from "@/types/user";
import { UserSchema } from "@/requests/schemas/userSchemas";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [user, setUser] = useState<UserSchema | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isSuccess, isError, isPending, data } = useQuery<UserSchema>({
    queryFn: () => {
      return axios.get(`${SERVER_URL}/${API_VERSION}/`, {
        withCredentials: true,
      });
    },
    queryKey: ["currentUser"],
  });
  if (isSuccess) {
    setUser(data);
  }

  if (isError) {
    redirect("/login");
  }

  if (isPending) {
    setIsLoading(true);
  }
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          LOSLC & ETHIX
        </a>
        {
          isError ? (
            <LoginForm />
          ) : (
            redirect("/dashboard")
          )
        }
      </div>
    </div>
  );
}
