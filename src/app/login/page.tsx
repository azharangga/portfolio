// app/login/page.tsx
"use client";

import * as React from "react";

type Errors = {
  username?: string;
  password?: string;
};

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [capsLock, setCapsLock] = React.useState(false);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState<Errors>({});

  function validate(nextUsername: string, nextPassword: string) {
    const e: Errors = {};

    const u = nextUsername.trim();
    if (!u) e.username = "Username is required.";
    else if (u.length < 3) e.username = "Username must be at least 3 characters.";
    else if (!/^[a-zA-Z0-9._-]+$/.test(u))
      e.username = "Only letters, numbers, dot, underscore, and dash are allowed.";

    if (!nextPassword) e.password = "Password is required.";
    else if (nextPassword.length < 8)
      e.password = "Password must be at least 8 characters.";

    return e;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validate(username, password);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Login success (dummy)");
    }, 900);
  }

  // Elegant input (1px border always; focus only changes border color; error is border-destructive)
  const inputBase =
    "flex h-11 w-full rounded-lg bg-background px-10 py-2 text-sm " +
    "border border-border/60 placeholder:text-muted-foreground/75 " +
    "transition-[border-color,box-shadow,background-color] duration-200 " +
    "hover:border-border/90 " +
    "focus:border-primary focus:outline-none " +
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] " +
    "focus:shadow-[0_0_0_4px_rgba(120,119,198,0.10)] dark:focus:shadow-[0_0_0_4px_rgba(120,119,198,0.12)]";

  const inputError =
    "border-destructive/70 hover:border-destructive/80 focus:border-destructive " +
    "focus:shadow-[0_0_0_4px_rgba(239,68,68,0.10)] dark:focus:shadow-[0_0_0_4px_rgba(239,68,68,0.12)]";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* ultra subtle premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-60 left-1/2 h-[780px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(120,119,198,0.16),transparent_62%)] blur-3xl" />
        <div className="absolute -bottom-72 right-[-120px] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.08),transparent_62%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-[1px] rounded-[18px] bg-gradient-to-b from-foreground/10 via-foreground/5 to-transparent opacity-60" />
          <div className="relative rounded-[18px] border border-border/60 bg-card/70 p-6 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.55)] backdrop-blur supports-[backdrop-filter]:bg-card/55">
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-foreground/12 to-transparent" />

            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-[26px] font-semibold tracking-tight">
                Sign in to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your username and password to continue.
              </p>
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
              {/* Username */}
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>

                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground/80">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21a8 8 0 0 0-16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>

                  <input
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => {
                      const v = e.target.value;
                      setUsername(v);
                      if (errors.username) setErrors((prev) => ({ ...prev, username: undefined }));
                    }}
                    onBlur={() => {
                      const next = validate(username, password);
                      setErrors((prev) => ({ ...prev, username: next.username }));
                    }}
                    autoComplete="username"
                    placeholder="e.g. johndoe"
                    aria-invalid={!!errors.username}
                    aria-describedby={errors.username ? "username-error" : undefined}
                    className={inputBase + (errors.username ? " " + inputError : "")}
                  />
                </div>

                {errors.username && (
                  <p id="username-error" className="text-xs text-destructive">
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>

                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground/80">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 11V8a4 4 0 1 0-8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 11h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      const v = e.target.value;
                      setPassword(v);
                      if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                    }}
                    onBlur={() => {
                      const next = validate(username, password);
                      setErrors((prev) => ({ ...prev, password: next.password }));
                    }}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    onKeyUp={(e) =>
                      setCapsLock((e as any).getModifierState?.("CapsLock") ?? false)
                    }
                    aria-invalid={!!errors.password}
                    aria-describedby={
                      errors.password ? "password-error" : capsLock ? "capslock-hint" : undefined
                    }
                    className={(inputBase + " pr-12") + (errors.password ? " " + inputError : "")}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground/80
                    transition-colors hover:text-foreground focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    tabIndex={0}
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M9.36 5.5A9 9 0 0 1 12 5c5 0 9 7 9 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M6.1 6.1A17.6 17.6 0 0 0 3 12s4 7 9 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                  </button>
                </div>

                {capsLock && (
                  <p id="capslock-hint" className="text-xs text-muted-foreground">
                    Caps Lock is on
                  </p>
                )}

                {errors.password && (
                  <p id="password-error" className="text-xs text-destructive">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="relative inline-flex h-11 w-full items-center justify-center rounded-lg
                bg-primary px-4 text-sm font-medium text-primary-foreground
                shadow-[0_18px_40px_-26px_rgba(0,0,0,0.65)]
                transition-[transform,background-color,box-shadow] duration-200
                hover:bg-primary/90 hover:shadow-[0_22px_52px_-34px_rgba(0,0,0,0.75)]
                active:translate-y-[1px]
                focus:outline-none
                disabled:opacity-60"
              >
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 hover:opacity-100">
                  <span className="absolute -inset-24 bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_55%)]" />
                </span>

                {loading ? "Signing in..." : "Sign in"}
              </button>

              <p className="pt-1 text-center text-xs text-muted-foreground">
                By signing in, you agree to our Terms and Privacy Policy.
              </p>
            </form>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} - Azharangga Kusuma
        </p>
      </div>
    </div>
  );
}
