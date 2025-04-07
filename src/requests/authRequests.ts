import { API_VERSION, SERVER_URL } from "@/config/env";
import axios from "axios";
import type { UserSchema } from "@/requests/schemas/userSchemas";
import type { User } from "@/types/user";

const LOGIN_LINK_REQUEST_URI = `${SERVER_URL}/${API_VERSION}/auth/login`;
const REGISTER_URI = `${SERVER_URL}/${API_VERSION}/auth/register`;
const CURRENT_USER_URI = `${SERVER_URL}/${API_VERSION}/`;

export async function registerUser(
  username: string,
  email: string,
): Promise<number> {
  const params = new URLSearchParams();
  params.append("username", username);
  params.append("email", email);
  const response = await axios({
    method: "POST",
    url: REGISTER_URI,
    data: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response.status;
}

export async function requestLoginLink(email: string, from_url?: string): Promise<number> {
  const params = new URLSearchParams();
  params.append("email", email);
  const response = await axios({
    method: "POST",
    url: LOGIN_LINK_REQUEST_URI,
    params: {
      from_url: from_url,
    },
    data: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response.status;
}

export async function requestCurrentUser(): Promise<User> {
  const response = await axios<UserSchema>({
    method: "GET",
    url: CURRENT_USER_URI,
    withCredentials: true,
  });
  return {
    id: response.data.id,
    username: response.data.username,
    email: response.data.email,
    accountType: response.data.account_type,
  };
}
