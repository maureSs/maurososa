import { redirect } from "next/navigation";

export default function MainMenuRedirect() {
  redirect("/?tab=character");
}
