"use client";
import { useAuth } from "@crossmint/client-sdk-react-ui";

export function Landing() {
  const { login } = useAuth();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between">
      <header className="flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Zlo.Co" width={40} height={40} />
          <span className="text-xl font-semibold">Zlo.Co</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => login()}
            className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-4 py-2 text-sm font-medium"
          >
            Log in / Sign up
          </button>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col items-center px-6">
        <section className="flex w-full max-w-6xl flex-col items-center gap-6 py-16 text-center">
          <h1 className="text-4xl font-bold sm:text-6xl">Your money. Your way.</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Zlo.Co is a modern digital wallet. Send, receive, and manage assets instantly
            with top-tier security.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <button
              onClick={() => login()}
              className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-6 py-3 text-base font-semibold"
            >
              Get started
            </button>
            <a
              href="#features"
              className="text-secondary hover:underline hover:underline-offset-4 px-6 py-3 text-base"
            >
              Learn more
            </a>
          </div>
        </section>

        <section
          id="features"
          className="grid w-full max-w-6xl grid-cols-1 gap-6 pb-16 sm:grid-cols-3"
        >
          <div className="rounded-2xl border bg-card p-6">
            <img src="/security.svg" alt="Security" width={40} height={40} />
            <h3 className="mt-4 text-lg font-semibold">Secure by design</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Passkey-ready authentication and battle-tested infrastructure.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <img src="/earn-yield.png" alt="Fast" width={40} height={40} />
            <h3 className="mt-4 text-lg font-semibold">Instant transfers</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Move funds globally in seconds with low fees.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <img src="/credit-card.svg" alt="Onramp" width={40} height={40} />
            <h3 className="mt-4 text-lg font-semibold">Easy onramp</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Buy assets with cards in just a few taps.
            </p>
          </div>
        </section>
      </main>

      <footer className="flex w-full items-center justify-center gap-4 px-6 py-8">
        <span className="text-muted-foreground text-sm">© {new Date().getFullYear()} Zlo.Co</span>
      </footer>
    </div>
  );
}


