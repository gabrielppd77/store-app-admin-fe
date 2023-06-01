import { useState } from "react";

import { useNavigate } from "react-router-dom";

// import moment from "moment";

// import useAlert from "@hooks/useAlert";
// import useNotification from "@hooks/useNotification";

// import api from "@services/api";
// import { nameAppStorage } from "@services/utils";
// import { FixMeLater } from "@services/FixeMeLater";

// import AuthContext from "@contexts/AuthContext";

interface SignInProps {
  email: string;
  password: string;
}

interface SignUpProps {
  email: string;
  name: string;
  password: string;
}

export default function useAuth() {
  // const router = useRouter();
  // const TOKEN_KEY = "TOKENS";
  // function login(iframeId: string) {
  //   const iframe = document.getElementById(iframeId) as HTMLIFrameElement;
  //   const windowDestination = iframe.contentWindow;
  //   windowDestination.postMessage(
  //     process.env.NEXT_PUBLIC_URL_AFTER_AUTHENTICATE,
  //     "*"
  //   );
  //   router.push(process.env.NEXT_PUBLIC_URL_TO_AUTHENTICATE);
  // }
  // function removeToken() {
  //   if (typeof window === "undefined") return;
  //   return localStorage.removeItem(TOKEN_KEY);
  // }
  // function logout() {
  //   removeToken();
  //   router.push("/");
  // }
  // function getToken() {
  //   if (typeof window === "undefined") return;
  //   return localStorage.getItem(TOKEN_KEY);
  // }
  // function setToken(token: string) {
  //   if (typeof window === "undefined") return;
  //   return localStorage.setItem(TOKEN_KEY, token);
  // }
  // function isLogged() {
  //   const token = getToken();
  //   if (token === null) return false;
  //   try {
  //     const { exp } = jwtDecode(token) as Payload;
  //     const expDate = new Date(exp * 1000).getTime();
  //     const nowDate = new Date().getTime();
  //     return nowDate < expDate;
  //   } catch (err) {
  //     return false;
  //   }
  // }
  // const isAuthenticated = isLogged();
  // return {
  //   login,
  //   logout,
  //   setToken,
  //   removeToken,
  //   isAuthenticated,
  // };
}
