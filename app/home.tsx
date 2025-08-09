"use client";

import { Landing } from "@/components/Landing";
import { MainScreen } from "@/components/MainScreen";
import { useAuth, useWallet } from "@crossmint/client-sdk-react-ui";
import { useProcessWithdrawal } from "@/hooks/useProcessWithdrawal";

export function HomeContent() {
  const { wallet, status: walletStatus } = useWallet();
  const { status, status: authStatus, user } = useAuth();

  useProcessWithdrawal(user?.id, wallet);

  const walletAddress = wallet?.address;
  const isLoggedIn = wallet != null && status === "logged-in";
  const isLoading = walletStatus === "in-progress" || authStatus === "initializing";

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Landing />;
  }

  return <MainScreen walletAddress={walletAddress} />;
}
