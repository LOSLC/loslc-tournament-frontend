"use client"
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function MatchPage() {
  const { matchId } = useParams();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold text-center">Match Page</h1>
      <p>
        Vous enverrez le lien du repo github après la fin des projets, en utilisant cet id comme sujet.
      </p>
      <p className="mt-4 text-lg">{matchId}</p>
    </div>
  );
}
