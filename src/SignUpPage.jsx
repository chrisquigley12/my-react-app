import { useState } from "react";
import "./SignUpPage.css";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [notify, setNotify] = useState(false);
  const [busy, setBusy] = useState(false);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const nameOk = name.trim().length > 0;
  const pwOk = pw.length >= 8;
  const match = pw && pw === pw2;
  const formOk = emailOk && nameOk && pwOk && match;

  async function onSubmit(e) {
    e.preventDefault();
    if (!formOk) return;
    setBusy(true);
    await new Promise((r) => setTimeout(r, 800));
    alert("Welcome to Book’in!");
    setBusy(false);
  }

  return (
    <main className="wrap">
      <div className="brand">Book’in.</div>

      <div className="shell">
        <section className="panel">
          <h1 className="h1">Sign Up</h1>
          <p className="sub">Create your account</p>

          <form className="form" onSubmit={onSubmit} noValidate>
            <label className="field">
              <span className="label">Name</span>
              <input
                className="input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="field">
              <span className="label">Email</span>
              <input
                className="input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!emailOk && email && (
                <span className="hint">Enter a valid email.</span>
              )}
            </label>

            <label className="field">
              <span className="label">Password</span>
              <input
                className="input"
                type="password"
                placeholder="••••••••"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
              />
              {!pwOk && pw && (
                <span className="hint">Use at least 8 characters.</span>
              )}
            </label>

            <label className="field">
              <span className="label">Confirm Password</span>
              <input
                className="input"
                type="password"
                placeholder="••••••••"
                value={pw2}
                onChange={(e) => setPw2(e.target.value)}
              />
              {pw2 && !match && (
                <span className="hint">Passwords don’t match.</span>
              )}
            </label>

            <label className="toggle">
              <input
                type="checkbox"
                checked={notify}
                onChange={(e) => setNotify(e.target.checked)}
              />
              <span>Enroll in Notifications</span>
            </label>

            <button className="cta" disabled={!formOk || busy}>
              {busy ? "Signing up…" : "SIGN UP"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
