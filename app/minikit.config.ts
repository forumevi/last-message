// app/minikit.config.ts
import type { MiniAppManifest } from "@base-org/minikit";

const miniapp: MiniAppManifest = {
  name: "The Last Message",
  description: "Everyone writes one sentence. Together, we write humanity’s last message.",
  url: "https://last-message-lyart.vercel.app", // ← kendi URL'ni yaz
  icon: "https://last-message-lyart.vercel.app/icon.png",
  banner: "https://last-message-lyart.vercel.app/banner.png",
  author_fid: 0,
};

export default miniapp;
