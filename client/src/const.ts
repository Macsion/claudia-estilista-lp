export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "Claudia Estilista - Salón Unisex";

export const APP_LOGO = "/logo.svg";

export const BUSINESS_INFO = {
  name: "Claudia Estilista",
  slogan: "Salón Unisex",
  phone: "011 3449-3593",
  whatsapp: "5491134493593",
  address1: "Moreno 1190, B1667 Tortuguitas, Buenos Aires",
  address2: "Hipólito Bouchard 1416, Grand Bourg",
  hours: "Lunes a Sábados 9:00 - 19:00 hs",
  instagram: "@claudiaestilista1190",
  facebook: "facebook.com/claudiaestilista1190",
  rating: "4.2",
  reviews: 185,
};

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
