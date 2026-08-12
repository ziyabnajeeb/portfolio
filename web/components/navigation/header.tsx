import { sanityFetch, siteSettingsQuery } from "@/lib/sanity";
import { HeaderBar } from "./header-bar";
import type { SiteSettings } from "@/types";

export async function Header() {
  const settings = await sanityFetch<SiteSettings>(siteSettingsQuery);

  return <HeaderBar name={settings?.name ?? "Portfolio"} />;
}
