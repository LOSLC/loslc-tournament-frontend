import { API_VERSION, SERVER_URL } from "@/config/env";
import type { LoginRequestSchema } from "@/schemas/authSchemas";
import axios from "axios";

export async function login(requestData: LoginRequestSchema) {
  const params = new URLSearchParams();
  params.append("email", requestData.email);
  const axiosResponse = await axios({
    method: "POST",
    url: `${SERVER_URL}/${API_VERSION}/auth/login`,
    data: params,
    params: {
      from_url: requestData.from_url,
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    withCredentials: true,
  });
  return axiosResponse.data;
}

export async function getCurrentUser() {
  const axiosResponse = await axios({
    method: "GET",
    url: `${SERVER_URL}/${API_VERSION}`,
    withCredentials: true,
  })
  return axiosResponse.data
}
