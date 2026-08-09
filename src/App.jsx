import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  achievements,
  guides,
  profile,
  tasks,
  streakRewards,
} from "./data";

import {
  load,
  save,
  verifyCommit,
  verifyLinkedIn,
  verifyRepo,
} from "./store";

import { getProfile } from "./api";

/* =========================================================
APP STATE
========================================================= */

function useAppState() {
  const [state, setState] = useState(load());

  useEffect(() => {
    const sync = () => {
      setState(load());
    };

    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("storage", sync);
    };
  }, []);

  const updateState = (next) => {
    save(next);
    setState(next);
  };

  return [state, updateState];
}

/* =========================================================
APP
========================================================= */

function App() {
  const [state, setState] = useAppState();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            state.signedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Landing state={state} setState={setState} />
            )
          }
        />

        <Route
          path="/*"
          element={<Shell state={state} setState={setState} />}
        />
      </Routes>
    </>
  );
}

/* =========================================================
BACKDROP
========================================================= */

function AnimatedBackdrop() {
  return (
    <div className="animated-backdrop" aria-hidden="true">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
    </div>
  );
}

/* =========================================================
APP SHELL
========================================================= */

function Shell({ state, setState }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);

  if (!state.signedIn) {
    return <Navigate to="/" replace />;
  }

  function signOut() {
    setState({
      ...state,
      signedIn: false,
      owner: false,
    });

    navigate("/");
  }

  const nav = [
    ["/dashboard", "⌂", "Dashboard"],
    ["/day/12", "▣", "Today"],
    ["/progress", "◔", "Progress"],
    ["/achievements", "◆", "Achievements"],
    ["/learn", "◈", "Learn"],
    ["/community", "♧", "Community"],
    ["/help", "?", "Help Center"],
    ["/profile", "◎", "Profile"],
  ];

  const profileName = state.profile?.name || profile.name;
  const profileYear = state.profile?.year || profile.year;

  const initials = profileName
    .split(" ")
    .filter(Boolean)
    .map((x) => x[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="app-shell">
      <AnimatedBackdrop />

      <aside className={mobile ? "sidebar open" : "sidebar"}>
        <div className="brand">
          <div className="brand-mark">AB</div>

          <div>
            <strong>ABTalks</strong>
            <small>60 DAY BUILD</small>
          </div>
        </div>

        <div className="user-mini">
          <div className="avatar">{initials}</div>

          <div>
            <b>{profileName}</b>
            <span>{profileYear}</span>
          </div>
        </div>

        <nav>
          {nav.map(([to, icon, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobile(false)}
              className={({ isActive }) =>
                isActive ? "nav active" : "nav"
              }
            >
              <span>{icon}</span>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="side-bottom">
          <button
            className="nav plain"
            onClick={() => {
              setState({
                ...state,
                signedIn: !state.signedIn,
              });
            }}
          >
            <span>{state.signedIn ? "✓" : "○"}</span>
            {state.signedIn ? "Signed in" : "Sign in"}
          </button>

          <button
            className="nav plain danger"
            onClick={signOut}
          >
            <span>↪</span>
            Sign out
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button
            className="menu-btn"
            onClick={() => setMobile(!mobile)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div>
            <div className="crumb">
              ABTalks / {location.pathname.replace("/", "") || "home"}
            </div>

            <strong>
              Build in public. One day at a time.
            </strong>
          </div>

          <div className="top-actions">
            <span className="status-dot" />
            <span>Live</span>
          </div>
        </header>

        <div className="content">
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard state={state} />}
            />

            <Route
              path="/day/:day"
              element={
                <Day
                  state={state}
                  setState={setState}
                />
              }
            />

            <Route
              path="/progress"
              element={<Progress state={state} />}
            />

            <Route
              path="/achievements"
              element={<Achievements state={state} />}
            />

            <Route path="/learn" element={<Learn />} />

            <Route
              path="/community"
              element={
                <Community
                  state={state}
                  setState={setState}
                />
              }
            />

            <Route path="/help" element={<Help />} />

            <Route
              path="/profile"
              element={
                <Profile
                  state={state}
                  setState={setState}
                />
              }
            />

            <Route
              path="*"
              element={<Dashboard state={state} />}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

/* =========================================================
LANDING
========================================================= */

function Landing({ state, setState }) {
  const navigate = useNavigate();

  function startChallenge() {
    setState({
      ...state,
      signedIn: true,
    });

    navigate("/dashboard");
  }

  return (
    <div className="landing">
      <AnimatedBackdrop />

      <nav className="landing-nav">
        <div className="brand">
          <div className="brand-mark">AB</div>

          <div>
            <strong>ABTalks</strong>
            <small>60 DAY BUILD</small>
          </div>
        </div>

        <button
          className="btn ghost"
          onClick={startChallenge}
        >
          Sign in
        </button>
      </nav>

      <section className="hero">
        <span className="eyebrow">
          THE 60-DAY CODING CHALLENGE
        </span>

        <h1>
          Build proof.
          <em> Become visible.</em>
        </h1>

        <p>
          One small build every day. A GitHub commit.
          A LinkedIn story. Sixty days of public proof
          that you can ship.
        </p>

        <div className="hero-actions">
          <button
            className="btn primary xl"
            onClick={startChallenge}
          >
            Start your challenge →
          </button>

          <a
            className="btn secondary xl"
            href="#how-it-works"
          >
            See how it works
          </a>
        </div>

        <div className="trust">
          <span>✓ No fake streaks</span>
          <span>✓ Public proof</span>
          <span>✓ Recruiter-ready signal</span>
        </div>
      </section>

      <section
        id="how-it-works"
        className="landing-grid"
      >
        {[
          [
            "01",
            "Pick a track",
            "Choose what you want to build and learn.",
          ],
          [
            "02",
            "Ship daily",
            "Finish a mission and make a real commit.",
          ],
          [
            "03",
            "Share proof",
            "Post your learning and grow your public trail.",
          ],
        ].map(([number, title, description]) => (
          <article
            className="feature"
            key={number}
          >
            <b>{number}</b>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <footer>
        ABTalks • Built for students who want their work to speak.
      </footer>
    </div>
  );
}

/* =========================================================
DASHBOARD
========================================================= */

function Dashboard({ state }) {
  const done = state.completed.length;
  const percent = Math.round((done / 60) * 100);

  const completedDays = [...state.completed]
    .map(Number)
    .sort((a, b) => a - b);

  let currentStreak = 0;

  if (completedDays.length > 0) {
    currentStreak = 1;

    for (let i = completedDays.length - 1; i > 0; i--) {
      if (
        completedDays[i] ===
        completedDays[i - 1] + 1
      ) {
        currentStreak++;
      } else {
        break;
      }
    }
  }

  const next =
    tasks.find(
      (task) => !state.completed.includes(task.day)
    ) || tasks[59];

  return (
    <Page
      title="Dashboard"
      subtitle="Your daily coding challenge at a glance."
    >
      <div className="stats">
        <Stat
          label="Current streak"
          value={`${currentStreak} days`}
          note={
            currentStreak
              ? "Keep shipping"
              : "Start with Day 1"
          }
        />

        <Stat
          label="Challenge progress"
          value={`${percent}%`}
          note={`${done}/60 completed`}
        />

        <Stat
          label="Builder status"
          value={done >= 30 ? "Builder" : "Rising"}
          note="Consistency signal"
        />
      </div>

      <div className="grid-2">
        <article className="card focus-card">
          <div className="card-top">
            <span className="tag">NEXT MISSION</span>

            <span className="eyebrow">
              DAY {next.day}
            </span>
          </div>

          <h2>{next.title}</h2>

          <p className="lead">
            {next.description}
          </p>

          <Link
            className="btn primary"
            to={`/day/${next.day}`}
          >
            Open challenge →
          </Link>
        </article>

        <article className="card ring-card">
          <ProgressRing percent={percent} />

          <div>
            <span className="tag">
              OVERALL PROGRESS
            </span>

            <h2>{percent}% complete</h2>

            <p className="lead">
              Your completed days are stored locally
              and survive refresh.
            </p>
          </div>
        </article>
      </div>

      <div className="section-title">
        <div>
          <h2>Your 60-day path</h2>
          <p>Keep the chain moving.</p>
        </div>

        <Link to="/progress">View all →</Link>
      </div>

      <DayStrip state={state} />
    </Page>
  );
}

/* =========================================================
SMALL COMPONENTS
========================================================= */

function Stat({ label, value, note }) {
  return (
    <article className="stat card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function ProgressRing({ percent }) {
  return (
    <div
      className="ring"
      style={{
        "--p": `${percent * 3.6}deg`,
      }}
    >
      <strong>{percent}%</strong>
      <span>complete</span>
    </div>
  );
}

function DayStrip({ state }) {
  return (
    <div className="day-strip">
      {tasks.slice(0, 14).map((task) => {
        const completed =
          state.completed.includes(task.day);

        const className = completed
          ? "day-chip done"
          : task.day === 12
          ? "day-chip current"
          : "day-chip";

        return (
          <Link
            key={task.day}
            to={`/day/${task.day}`}
            className={className}
          >
            <small>DAY</small>
            <b>{task.day}</b>

            <span>
              {completed
                ? "✓"
                : task.day === 12
                ? "→"
                : "·"}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

/* =========================================================
DAY / CHALLENGE
========================================================= */

function Day({ state, setState }) {
  const { day } = useParams();

  const dayNumber = Number(day);
  const d = tasks[dayNumber - 1];

  const old = state.proofs?.[day] || {};

  const savedProof =
    Boolean(old.repo) &&
    Boolean(old.commit) &&
    Boolean(old.li);

  const [repo, setRepo] = useState(old.repo || "");
  const [commit, setCommit] = useState(
    old.commit || ""
  );
  const [li, setLi] = useState(old.li || "");

  const [r, setR] = useState(null);
  const [c, setC] = useState(null);
  const [l, setL] = useState(null);

  const [answers, setAnswers] = useState(
    old.answers || {}
  );

  const [quizSubmitted, setQuizSubmitted] =
    useState(old.quizSubmitted || false);

  if (!d) {
    return (
      <Page
        title="Challenge not found"
        subtitle="The requested day does not exist."
      >
        <article className="card">
          <p>
            The requested challenge day does not exist.
          </p>

          <Link
            className="btn primary"
            to="/dashboard"
          >
            Back to dashboard
          </Link>
        </article>
      </Page>
    );
  }

  const isProofDay = d.type === "proof";

  const correctAnswers = d.questions
    ? d.questions.filter(
        (question, index) =>
          answers[index] === question.answer
      ).length
    : 0;

  const quizPassed =
    Boolean(d.questions) &&
    d.questions.length > 0 &&
    correctAnswers === d.questions.length;

  const proofPassed =
    savedProof ||
    [r, c, l].filter(
      (result) => result?.ok
    ).length === 3;

  const completed =
    state.completed.includes(dayNumber);

  function selectAnswer(
    questionIndex,
    answerIndex
  ) {
    if (completed) return;

    setAnswers((previous) => ({
      ...previous,
      [questionIndex]: answerIndex,
    }));

    setQuizSubmitted(false);
  }

  function completeQuiz() {
    if (!quizPassed) {
      setQuizSubmitted(true);
      return;
    }

    const next = {
      ...state,

      proofs: {
        ...state.proofs,

        [day]: {
          ...old,
          answers,
          quizSubmitted: true,
          verifiedAt: new Date().toISOString(),
        },
      },

      completed: Array.from(
        new Set([
          ...state.completed,
          dayNumber,
        ])
      ),
    };

    setState(next);
    setQuizSubmitted(true);
  }

  function submitProof() {
    if (!proofPassed) return;

    const next = {
      ...state,

      proofs: {
        ...state.proofs,

        [day]: {
          repo,
          commit,
          li,
          verifiedAt: new Date().toISOString(),
        },
      },

      completed: Array.from(
        new Set([
          ...state.completed,
          dayNumber,
        ])
      ),
    };

    setState(next);
  }

  return (
    <Page
      title={`Day ${day}`}
      subtitle={
        isProofDay
          ? "Complete the work, verify the proof, then submit."
          : "Complete today's challenge and pass all questions."
      }
    >
      <article className="card challenge-intro">
        <span className="tag">
          {isProofDay
            ? "REAL EVIDENCE"
            : "DAILY CHALLENGE"}
        </span>

        <h1>{d.title}</h1>

        <p>{d.description}</p>

        <div className="deliverables">
          {d.deliverables.map((item, index) => (
            <div key={index}>
              ✓ <span>{item}</span>
            </div>
          ))}
        </div>
      </article>

      {isProofDay ? (
        <div className="proof-layout">
          <article className="card proof-card">
            <div className="section-title">
              <div>
                <h2>Submit proof of work</h2>
                <p>All 3 checks must pass.</p>
              </div>

              <b className="counter">
                {
                  [r, c, l].filter(
                    (result) => result?.ok
                  ).length
                }
                /3
              </b>
            </div>

            <Proof
              label="GitHub repository"
              value={repo}
              set={setRepo}
              placeholder="https://github.com/owner/repository"
              action={async () => {
                setR(await verifyRepo(repo));
              }}
              result={r}
            />

            <Proof
              label="GitHub commit"
              value={commit}
              set={setCommit}
              placeholder="https://github.com/owner/repo/commit/abc123"
              action={async () => {
                setC(
                  await verifyCommit(
                    commit,
                    repo
                  )
                );
              }}
              result={c}
            />

            <Proof
              label="LinkedIn post"
              value={li}
              set={setLi}
              placeholder="https://www.linkedin.com/posts/..."
              action={() => {
                setL(verifyLinkedIn(li));
              }}
              result={l}
            />

            <div className="notice">
              ⓘ GitHub repository and commit URLs are
              checked by the demo verifier. LinkedIn
              ownership requires a production
              backend/OAuth integration.
            </div>

            <button
              className="btn primary full"
              disabled={!proofPassed}
              onClick={submitProof}
            >
              {completed
                ? "✓ Day completed"
                : "Submit verified proof"}
            </button>
          </article>

          <article className="card side-guide">
            <span className="tag">DAY FLOW</span>

            <div className="flow">
              <span>Read mission</span>
              <i>↓</i>

              <span>Build</span>
              <i>↓</i>

              <span>Commit</span>
              <i>↓</i>

              <span>Share</span>
              <i>↓</i>

              <b>Verified day</b>
            </div>
          </article>
        </div>
      ) : (
        <article className="card quiz-card">
          <div className="section-title">
            <div>
              <span className="tag">
                KNOWLEDGE CHECK
              </span>

              <h2>Today's questions</h2>

              <p>
                Answer all questions correctly to
                complete this day.
              </p>
            </div>

            <b className="counter">
              {correctAnswers}/
              {d.questions?.length || 0}
            </b>
          </div>

          <div className="quiz-list">
            {d.questions?.map(
              (question, questionIndex) => (
                <div
                  className="quiz-question"
                  key={questionIndex}
                >
                  <h3>
                    {questionIndex + 1}.{" "}
                    {question.question}
                  </h3>

                  <div className="quiz-options">
                    {question.options.map(
                      (option, optionIndex) => {
                        const selected =
                          answers[questionIndex] ===
                          optionIndex;

                        const showCorrect =
                          quizSubmitted &&
                          optionIndex ===
                            question.answer;

                        const showWrong =
                          quizSubmitted &&
                          selected &&
                          optionIndex !==
                            question.answer;

                        let className =
                          "quiz-option";

                        if (selected) {
                          className += " selected";
                        }

                        if (showCorrect) {
                          className += " correct";
                        }

                        if (showWrong) {
                          className += " wrong";
                        }

                        return (
                          <button
                            type="button"
                            key={optionIndex}
                            className={className}
                            disabled={completed}
                            onClick={() =>
                              selectAnswer(
                                questionIndex,
                                optionIndex
                              )
                            }
                          >
                            <span>
                              {String.fromCharCode(
                                65 + optionIndex
                              )}
                            </span>

                            {option}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          {quizSubmitted && !quizPassed && (
            <div className="result bad">
              ! Some answers are incorrect.
              Review the questions and try again.
            </div>
          )}

          {quizPassed && !completed && (
            <div className="result ok">
              ✓ All answers are correct. You can
              complete this day.
            </div>
          )}

          {completed && (
            <div className="result ok">
              ✓ Day {day} has already been completed.
            </div>
          )}

          <button
            className="btn primary full"
            disabled={!quizPassed || completed}
            onClick={completeQuiz}
          >
            {completed
              ? "✓ Day completed"
              : "Complete today's challenge"}
          </button>
        </article>
      )}
    </Page>
  );
}

/* =========================================================
PROOF INPUT
========================================================= */

function Proof({
  label,
  value,
  set,
  placeholder,
  action,
  result,
}) {
  return (
    <div className="proof">
      <label>{label}</label>

      <div className="input-row">
        <input
          value={value}
          onChange={(event) =>
            set(event.target.value)
          }
          placeholder={placeholder}
        />

        <button
          className="btn secondary"
          type="button"
          onClick={action}
        >
          Verify
        </button>
      </div>

      {result && (
        <div
          className={
            result.ok
              ? "result ok"
              : "result bad"
          }
        >
          {result.ok ? "✓" : "!"} {result.msg}
        </div>
      )}
    </div>
  );
}

/* =========================================================
PROGRESS
========================================================= */

function Progress({ state }) {
  const percent = Math.round(
    (state.completed.length / 60) * 100
  );

  const nextDay =
    state.completed.length < 60
      ? state.completed.length + 1
      : 60;

  return (
    <Page
      title="Progress"
      subtitle="Track your 60-day building journey."
    >
      <div className="stats">
        <Stat
          label="Completed days"
          value={`${state.completed.length}/60`}
          note="Progress saved locally"
        />

        <Stat
          label="Progress"
          value={`${percent}%`}
          note="Persisted locally"
        />

        <Stat
          label="Next day"
          value={nextDay}
          note="Keep building"
        />
      </div>

      <div className="section-title">
        <div>
          <h2>60-day calendar</h2>
          <p>
            Click any day to open its challenge.
          </p>
        </div>
      </div>

      <div className="calendar">
        {tasks.map((task) => {
          const completed =
            state.completed.includes(task.day);

          return (
            <Link
              key={task.day}
              to={`/day/${task.day}`}
              className={
                completed
                  ? "calendar-day done"
                  : "calendar-day"
              }
            >
              <small>DAY</small>
              <span>{task.day}</span>

              <small>
                {completed ? "✓" : "○"}
              </small>
            </Link>
          );
        })}
      </div>
    </Page>
  );
}

/* =========================================================
ACHIEVEMENTS
========================================================= */

function Achievements({ state }) {
  const completedDays = [...state.completed]
    .map(Number)
    .sort((a, b) => a - b);

  let longestStreak = 0;
  let currentStreak = 0;

  if (completedDays.length > 0) {
    let streak = 1;

    longestStreak = 1;

    for (let i = 1; i < completedDays.length; i++) {
      if (
        completedDays[i] ===
        completedDays[i - 1] + 1
      ) {
        streak++;
      } else {
        streak = 1;
      }

      longestStreak = Math.max(
        longestStreak,
        streak
      );
    }

    currentStreak = 1;

    for (
      let i = completedDays.length - 1;
      i > 0;
      i--
    ) {
      if (
        completedDays[i] ===
        completedDays[i - 1] + 1
      ) {
        currentStreak++;
      } else {
        break;
      }
    }
  }

  return (
    <Page
      title="Achievements"
      subtitle="Turn consistency into visible milestones."
    >
      <section className="achievement-section">
        <div className="reward-banner card">
          <div>
            <span className="tag">
              STREAK REWARDS
            </span>

            <h2>
              {currentStreak} DAY STREAK
            </h2>

            <p>
              Keep completing consecutive challenges
              to unlock the next medal.
            </p>
          </div>

          <div className="reward-progress">
            <strong>{longestStreak}</strong>
            <span>Best streak</span>
          </div>
        </div>

        <div className="reward-grid">
          {streakRewards.map((reward) => {
            const unlocked =
              longestStreak >= reward.streak;

            return (
              <article
                key={reward.id}
                className={
                  unlocked
                    ? "streak-medal unlocked"
                    : "streak-medal locked"
                }
              >
                <div className="medal-stage">
                  <div className="medal-ribbon">
                    <span />
                    <span />
                  </div>

                  <div
                    className={`medal medal-${reward.id}`}
                  >
                    <div className="medal-inner">
                      {reward.id === "bronze" && "B"}
                      {reward.id === "silver" && "S"}
                      {reward.id === "gold" && "G"}
                      {reward.id === "platinum" && "P"}
                      {reward.id === "diamond" && "D"}
                    </div>
                  </div>

                  {!unlocked && (
                    <div className="medal-lock">
                      🔒
                    </div>
                  )}
                </div>

                <div className="medal-info">
                  <span className="medal-streak">
                    {reward.label}
                  </span>

                  <h3>{reward.title}</h3>

                  <p>{reward.description}</p>

                  <strong className="medal-status">
                    {unlocked
                      ? "✓ UNLOCKED"
                      : `LOCKED • ${reward.streak} DAYS`}
                  </strong>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="achievement-section">
        <div className="achievement-head">
          <div>
            <span className="tag">
              CHALLENGE BADGES
            </span>

            <h2>
              {
                achievements.filter((achievement) =>
                  state.completed.includes(
                    achievement.day
                  )
                ).length
              }
              /{achievements.length}
            </h2>

            <p>
              Complete challenge milestones to unlock
              badges.
            </p>
          </div>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement) => {
            const unlocked =
              state.completed.includes(
                achievement.day
              );

            return (
              <article
                className={
                  unlocked
                    ? "achievement unlocked"
                    : "achievement locked"
                }
                key={achievement.id}
              >
                <div className="badge">
                  {unlocked ? "◆" : "🔒"}
                </div>

                <div>
                  <h3>{achievement.title}</h3>

                  <p>{achievement.detail}</p>

                  <small>
                    {unlocked
                      ? "Unlocked"
                      : `Complete Day ${achievement.day}`}
                  </small>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Page>
  );
}

/* =========================================================
LEARN
========================================================= */

function Learn() {
  const [open, setOpen] = useState(null);

  return (
    <Page
      title="Learn"
      subtitle="Short lessons to help you build better."
    >
      <div className="learn-grid">
        {guides.map((guide, index) => (
          <article
            className="learn-card card"
            key={guide.title}
            onClick={() =>
              setOpen(
                open === index ? null : index
              )
            }
          >
            <span className="tag">
              LESSON {index + 1}
            </span>

            <h2>{guide.title}</h2>

            <p>
              {open === index
                ? guide.body
                : "Tap to open the explanation and practical flow."}
            </p>

            <div className="mini-flow">
              <span>Learn</span>
              <span>→</span>
              <span>Build</span>
              <span>→</span>
              <span>Prove</span>
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}

/* =========================================================
COMMUNITY
========================================================= */

function Community({ state, setState }) {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [message, setMessage] = useState("");

  function join() {
    if (!name.trim() || !college.trim()) {
      setMessage(
        "Enter your name and college."
      );
      return;
    }

    const exists = state.members.some(
      (member) =>
        member.name.toLowerCase() ===
        name.trim().toLowerCase()
    );

    if (exists) {
      setMessage(
        "This member is already in the demo community."
      );
      return;
    }

    const next = {
      ...state,

      members: [
        ...state.members,
        {
          id: crypto.randomUUID(),
          name: name.trim(),
          college: college.trim(),
          joinedAt: new Date().toISOString(),
        },
      ],
    };

    setState(next);

    setName("");
    setCollege("");

    setMessage(
      "Joined the community successfully."
    );
  }

  return (
    <Page
      title="Community"
      subtitle="Connect with other builders."
    >
      <div className="grid-2">
        <article className="card">
          <span className="tag">
            JOIN PUBLICLY
          </span>

          <h2>Find your builders</h2>

          <p className="lead">
            No owner approval is required in this demo.
            Each browser prevents the same name from
            being added twice.
          </p>

          <div className="proof">
            <label>Your name</label>

            <input
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Your name"
            />
          </div>

          <div className="proof">
            <label>College</label>

            <input
              value={college}
              onChange={(event) =>
                setCollege(event.target.value)
              }
              placeholder="College name"
            />
          </div>

          <button
            className="btn primary full"
            onClick={join}
          >
            Join community →
          </button>

          {message && (
            <div className="notice">
              {message}
            </div>
          )}
        </article>

        <article className="card">
          <div className="section-title">
            <div>
              <span className="tag">MEMBERS</span>
              <h2>{state.members.length}</h2>
            </div>
          </div>

          {state.members.length === 0 ? (
            <div className="empty">
              No members yet. Be the first to join.
            </div>
          ) : (
            <div className="members">
              {state.members.map((member) => (
                <div
                  className="member"
                  key={member.id}
                >
                  <div className="avatar">
                    {member.name[0].toUpperCase()}
                  </div>

                  <div>
                    <b>{member.name}</b>
                    <span>{member.college}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </article>
      </div>
    </Page>
  );
}

/* =========================================================
HELP
========================================================= */

function Help() {
  return (
    <Page
      title="Help Center"
      subtitle="Everything you need to complete the challenge."
    >
      <div className="help-grid">
        {guides.map((guide, index) => (
          <article
            className="card help-item"
            key={guide.title}
          >
            <div className="help-number">
              {index + 1}
            </div>

            <div>
              <h3>{guide.title}</h3>
              <p>{guide.body}</p>
            </div>
          </article>
        ))}
      </div>

      <article className="card">
        <div className="section-title">
          <div>
            <span className="tag">
              URL EXAMPLES
            </span>

            <h2>Proof URL formats</h2>
          </div>
        </div>

        <div className="url-example">
          GitHub repo:{" "}
          https://github.com/your-name/your-repo
        </div>

        <div className="url-example">
          GitHub commit:{" "}
          https://github.com/your-name/your-repo/commit/abc123
        </div>

        <div className="url-example">
          LinkedIn post:{" "}
          https://www.linkedin.com/posts/your-post
        </div>
      </article>
    </Page>
  );
}

/* =========================================================
PROFILE
========================================================= */

function Profile({ state, setState }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(
    state.profile || profile
  );

  const [apiLoading, setApiLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  function saveProfile() {
    setState({
      ...state,
      profile: form,
    });

    setEditing(false);
  }

  async function loadBackendProfile() {
    try {
      setApiLoading(true);
      setApiMessage("");

      const data = await getProfile();

      if (data.success && data.profile) {
        setForm(data.profile);

        setState({
          ...state,
          profile: data.profile,
        });

        setApiMessage(
          "✓ Profile loaded from backend API."
        );
      } else {
        setApiMessage(
          "Backend API did not return a profile."
        );
      }
    } catch (error) {
      setApiMessage(
        "Backend API से profile load नहीं हो सकी."
      );
    } finally {
      setApiLoading(false);
    }
  }

  const initials = (form.name || "A")
    .split(" ")
    .filter(Boolean)
    .map((x) => x[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (editing) {
    return (
      <Page
        title="Edit Profile"
        subtitle="Update your builder profile."
      >
        <article className="card profile-card">
          <div className="profile-avatar">
            {initials}
          </div>

          <div className="profile-info">
            <span className="tag">
              EDIT PROFILE
            </span>

            <input
              value={form.name || ""}
              onChange={(event) =>
                setForm({
                  ...form,
                  name: event.target.value,
                })
              }
              placeholder="Your name"
            />

            <input
              value={form.college || ""}
              onChange={(event) =>
                setForm({
                  ...form,
                  college: event.target.value,
                })
              }
              placeholder="College"
            />

            <input
              value={form.year || ""}
              onChange={(event) =>
                setForm({
                  ...form,
                  year: event.target.value,
                })
              }
              placeholder="Year"
            />

            <button
              className="btn primary"
              onClick={saveProfile}
            >
              Save profile
            </button>

            <button
              className="btn secondary"
              onClick={loadBackendProfile}
              disabled={apiLoading}
            >
              {apiLoading
                ? "Loading..."
                : "Load from Backend API"}
            </button>

            {apiMessage && (
              <div className="notice">
                {apiMessage}
              </div>
            )}
          </div>
        </article>
      </Page>
    );
  }

  return (
    <Page
      title="Profile"
      subtitle="Your public builder identity."
    >
      <div className="grid-2">
        <article className="card profile-card">
          <div className="profile-avatar">
            {(state.profile?.name || "A")
              .split(" ")
              .filter(Boolean)
              .map((x) => x[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>

          <div className="profile-info">
            <span className="tag">
              STUDENT PROFILE
            </span>

            <h1>
              {state.profile?.name}
            </h1>

            <p>
              {state.profile?.year} •{" "}
              {state.profile?.college}
            </p>

            <button
              className="btn secondary"
              onClick={() => setEditing(true)}
            >
              Edit profile
            </button>

            <button
              className="btn primary"
              onClick={loadBackendProfile}
              disabled={apiLoading}
            >
              {apiLoading
                ? "Loading..."
                : "Sync with Backend API"}
            </button>

            {apiMessage && (
              <div className="notice">
                {apiMessage}
              </div>
            )}
          </div>
        </article>

        <article className="card owner-card">
          <span className="tag">
            BACKEND CONNECTED
          </span>

          <h2>ABTalks API</h2>

          <p className="lead">
            Profile data can now be loaded from
            the ABTalks backend API.
          </p>

          <p className="lead">
            API endpoint:
            <br />
            http://localhost:5000/api/profile
          </p>
        </article>
      </div>
    </Page>
  );
}

/* =========================================================
PAGE WRAPPER
========================================================= */

function Page({
  title,
  subtitle,
  children,
}) {
  return (
    <section className="page">
      <div className="page-head">
        <span className="tag">ABTALKS</span>

        <h1>{title}</h1>

        <p>{subtitle}</p>
      </div>

      {children}
    </section>
  );
}

export default App;