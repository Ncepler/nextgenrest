import { ImageResponse } from "next/og";
import { COMPANY_NAME, PHONE_DISPLAY } from "@/lib/site-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// No fonts fetched — the system sans-serif stack Satori already knows how
// to render, so this never makes a network call at build/request time.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0B1220",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700, color: "#F2F3F5" }}>
          {COMPANY_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#F2F3F5", lineHeight: 1.05 }}>
            Disaster Doesn&apos;t Wait. Neither Do We.
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#C8431A" }}>
            {PHONE_DISPLAY}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
