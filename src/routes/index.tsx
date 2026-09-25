import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/mid-autumn.html" });
  },
  head: () => ({
    meta: [
      { title: "中秋快乐 🥮" },
      { name: "description", content: "一份中秋祝福与月光心愿。" },
      { property: "og:title", content: "中秋快乐 🥮" },
      { property: "og:description", content: "一份中秋祝福与月光心愿。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => null,
});