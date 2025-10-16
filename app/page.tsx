"use client";

import { redirect, RedirectType } from "next/navigation";

export default function Home() {
  redirect("/inicio", RedirectType.replace);
  return <div></div>;
}
