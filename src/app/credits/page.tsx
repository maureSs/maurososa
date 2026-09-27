import { redirect } from "next/navigation";

export default function CreditsRedirect() {
  redirect("/?tab=character");
}
