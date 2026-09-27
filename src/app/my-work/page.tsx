import { redirect } from "next/navigation";

export default function MyWorkRedirect() {
  redirect("/?tab=journey");
}
