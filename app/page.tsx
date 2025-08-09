// @ts-nocheck
import { HomeContent } from "@/app/home";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex min-h-screen flex-col items-center gap-8 sm:items-start">
        <HomeContent />
      </main>
      {/* Footer handled inside the Landing component when logged out */}
    </div>
  );
}
