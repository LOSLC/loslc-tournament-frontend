import { useMutation, useQuery } from "@tanstack/react-query";
import { login } from "@/requests/authRequests";
import type { LoginRequestSchema } from "@/schemas/authSchemas";

export function useRequestLoginLink(requestData: LoginRequestSchema) {
  return useMutation({
    mutationFn: () => login(requestData),
  });
}
