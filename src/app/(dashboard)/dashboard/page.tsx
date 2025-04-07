"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Spinner } from "@/components/ui/spinner";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { API_VERSION, SERVER_URL, TOURNAMENT_ID } from "@/config/env";
import { UserSchema } from "@/requests/schemas/userSchemas";
import { MatchSubject, TournamentSession } from "@/types/tournament";
import { SectionCard } from "@/components/section-card";

export default function TournamentDashboardPage() {
  const router = useRouter();

  // Fetch current user data
  const {
    data: userData,
    isError: userFetchError,
    isLoading: userFetchLoading,
  } = useQuery<UserSchema>({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const response = await axios.get(`${SERVER_URL}/${API_VERSION}/`, {
        withCredentials: true,
      });
      return response.data;
    },
    retry: 1,
  });

  // Redirect to login if user fetch fails
  useEffect(() => {
    if (userFetchError) {
      router.push("/login");
    }
  }, [userFetchError, router]);

  // Fetch tournament session data
  const {
    data: tournamentSession,
    isLoading: sessionLoading,
    isError: sessionError,
  } = useQuery<TournamentSession>({
    queryKey: ["tournamentSession"],
    queryFn: async () => {
      const response = await axios({
        url: `${SERVER_URL}/${API_VERSION}/tournament_todays_session`,
        params: { tournament_id: TOURNAMENT_ID },
        method: "GET",
        withCredentials: true,
      });
      return response.data;
    },
    enabled: !userFetchError,
  });

  // Fetch match subjects once we have the tournament session
  const {
    data: matchSubjects,
    isLoading: subjectsLoading,
    isError: subjectsError,
  } = useQuery<MatchSubject[]>({
    queryKey: ["matchSubjects", tournamentSession?.id],
    queryFn: async () => {
      const response = await axios({
        url: `${SERVER_URL}/${API_VERSION}/tournament_match_subjects`,
        params: { tournament_session_id: tournamentSession?.id },
        method: "GET",
        withCredentials: true,
      });
      return response.data;
    },
    enabled: !!tournamentSession?.id,
  });

  // Handle errors with toast notifications
  useEffect(() => {
    if (sessionError) {
      toast.error("Failed to load tournament session data");
    }
    if (subjectsError) {
      toast.error("Failed to load match subjects");
    }
  }, [sessionError, subjectsError]);

  const isLoading = userFetchLoading || sessionLoading || subjectsLoading;

  return (
    <div className="flex flex-1 flex-col ">
      <div className="@container/main w-full">
        {isLoading ? (
          <div className="flex  items-center justify-center h-64 w-full">
            <Spinner />
          </div>
        ) : (
          <div className="flex gap-3 flex-wrap p-9">
            {matchSubjects?.map((subject) => (
              <SectionCard key={subject.id} subject={subject} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
