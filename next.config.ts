import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The hero photo (the only full-bleed `sizes="100vw"` image on the
    // site) is a 1672px-wide source. Next's default deviceSizes goes up to
    // 3840, which — combined with `fill` + `sizes="100vw"` — made the
    // browser request a nominal 3840w srcset candidate for an image with
    // nowhere near that much real detail. Capping the top end here keeps
    // every full-bleed image request honest about what resolution actually
    // exists to serve.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
