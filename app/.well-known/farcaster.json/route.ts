import { generateManifest } from "@base-org/minikit";
import miniapp from "../../../minikit.config";

export const dynamic = "force-static";

export async function GET() {
  const manifest = await generateManifest(miniapp);
  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": "application/json" },
  });
}
