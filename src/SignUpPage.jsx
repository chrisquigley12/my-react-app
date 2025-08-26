import { useState } from "react";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notify, setNotify] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneDigits = phone.replace(/\D/g, "");
  const phoneOk = phoneDigits.length >= 10;
  const nameOk = fullName.trim().length >= 2;
  const formOk = emailOk && phoneOk && nameOk;

  async function onSubmit(e) {
    e.preventDefault();
    if (!formOk) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    console.log({ fullName, email, phone: phoneDigits, notify });
    alert("Thanks! You're in. We'll be in touch.");
  }

  return (
    <main className="wrap">
      <section className="card pop">
        <header className="header">
          <div className="glyph" aria-hidden>
            
          </div>
          <h1 className="title">Welcome to Book'in</h1>
          <p className="sub">Get early access and booking updates.</p>
        </header>

        <form className="form" onSubmit={onSubmit} noValidate>
          <label className="field">
            <span className="label">Full name</span>
            <input
              autoComplete="name"
              placeholder="Ada Lovelace"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              aria-invalid={nameOk ? "false" : "true"}
            />
            {!nameOk && fullName && (
              <span className="hint">Name must be at least 2 characters.</span>
            )}
          </label>

          <label className="field">
            <span className="label">Email</span>
            <input
              type="email"
              autoComplete="email"
              placeholder="ada@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={emailOk ? "false" : "true"}
            />
            {!emailOk && email && (
              <span className="hint">Enter a valid email.</span>
            )}
          </label>

          <label className="field">
            <span className="label">Phone</span>
            <input
              inputMode="tel"
              autoComplete="tel"
              placeholder="+1 555 123 4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={phoneOk ? "false" : "true"}
            />
            {!phoneOk && phone && (
              <span className="hint">Use at least 10 digits.</span>
            )}
          </label>

          <label className="toggle">
            <input
              type="checkbox"
              checked={notify}
              onChange={(e) => setNotify(e.target.checked)}
            />
            <span>Send me booking notifications</span>
          </label>

          <button
            className={`cta ${!formOk || submitting ? "disabled" : ""}`}
            disabled={!formOk || submitting}
          >
            {submitting ? "Submitting…" : "Join the list"}
          </button>

          <p className="terms">
            By continuing, you agree to our <a href="#">Terms</a> and{" "}
            <a href="#">Privacy</a>.
          </p>
        </form>
      </section>
    </main>
  );
}