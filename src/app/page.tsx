import { Suspense } from "react";

import ProfileShell from "@/components/profile/ProfileShell";

function ProfileFallback() {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-3 py-6">
      <div className="profile-window h-[min(720px,80vh)] w-full max-w-5xl animate-pulse bg-card/70" />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<ProfileFallback />}>
      <ProfileShell />
    </Suspense>
  );
}
