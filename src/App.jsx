import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { achievements, guides, profile, tasks, streakRewards } from "./data";
import { load, save, verifyCommit, verifyLinkedIn, verifyRepo } from "./store";

function useAppState() {
  const [state, setState] = useState(load());
  const sync = () => setState(load());
  useEffect(() => {
    const fn = () => sync();
    window.addEventListener("storage", fn);
    return () => window.removeEventListener("storage", fn);
  }, []);
  return [state, (next) => { save(next); setState(next); }];
}

function App() {
  const [state, setState] = useAppState();
  return (
    <div className="app">
      <AnimatedBackdrop />
      <Routes>
        <Route path="/" element={<Landing state={state} setState={setState} />} />
        <Route path="*" element={<Shell state={state} setState={setState} />} />
      </Routes>
    </div>
  );
}

function AnimatedBackdrop() {
  return <div className="backdrop" aria-hidden="true"><span/><span/><span/><i/><i/></div>;
}

function Shell({ state, setState }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);

  function signOut() {
    setState({ ...state, signedIn: false, owner: false });
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
    ["/profile", "◎", "Profile"]
  ];

  return (
    <div className="shell">
      <aside className={mobile ? "sidebar open" : "sidebar"}>
        <div className="brand">
          <div className="brand-mark">AB</div>
          <div><strong>ABTalks</strong><small>60 DAY BUILD</small></div>
        </div>
        <div className="user-mini">
          <div className="avatar">{profile.name.split(" ").map(x => x[0]).join("")}</div>
          <div><b>{state.profile.name}</b><span>{state.profile.year}</span></div>
        </div>
        <nav>
          {nav.map(([to, icon, label]) => (
            <NavLink key={to} to={to} onClick={() => setMobile(false)} className={({isActive}) => isActive ? "nav active" : "nav"}>
              <span>{icon}</span>{label}
            </NavLink>
          ))}
        </nav>
        <div className="side-bottom">
          <button className="nav plain" onClick={() => { setState({...state, signedIn: !state.signedIn}); }}>{state.signedIn ? "✓ Signed in" : "○ Sign in"}</button>
          <button className="nav plain danger" onClick={signOut}>↪ Sign out</button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="menu-btn" onClick={() => setMobile(!mobile)}>☰</button>
          <div>
            <div className="crumb">ABTalks / {location.pathname.replace("/", "") || "home"}</div>
            <strong>Build in public. One day at a time.</strong>
          </div>
          <div className="top-actions">
            <span className="status-dot"/> <span>Live</span>
          </div>
        </header>
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard state={state} />} />
            <Route path="/day/:day" element={<Day state={state} setState={setState} />} />
            <Route path="/progress" element={<Progress state={state} />} />
            <Route path="/achievements" element={<Achievements state={state} />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/community" element={<Community state={state} setState={setState} />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile state={state} setState={setState} />} />
            <Route path="*" element={<Dashboard state={state} />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function Landing({state, setState}) {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <header className="landing-nav"><Link className="brand" to="/"><div className="brand-mark">AB</div><div><strong>ABTalks</strong><small>60 DAY BUILD</small></div></Link><button className="btn ghost" onClick={() => {setState({...state,signedIn:true});navigate("/dashboard")}}>Sign in</button></header>
      <section className="hero">
        <div className="eyebrow">THE 60-DAY CODING CHALLENGE</div>
        <h1>Build proof.<br/><em>Become visible.</em></h1>
        <p>One small build every day. A GitHub commit. A LinkedIn story. Sixty days of public proof that you can ship.</p>
        <div className="hero-actions"><button className="btn primary xl" onClick={() => {setState({...state,signedIn:true});navigate("/dashboard")}}>Start your challenge →</button><Link className="btn secondary xl" to="/help">See how it works</Link></div>
        <div className="trust"><span>✓ No fake streaks</span><span>✓ Public proof</span><span>✓ Recruiter-ready signal</span></div>
      </section>
      <section className="landing-grid">
        {[
          ["01","Pick a track","Choose what you want to build and learn."],
          ["02","Ship daily","Finish a mission and make a real commit."],
          ["03","Share proof","Post your learning and grow your public trail."]
        ].map(x=><article className="feature" key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}
      </section>
      <footer>ABTalks • Built for students who want their work to speak.</footer>
    </div>
  );
}

function Dashboard({state}) {
  const done = state.completed.length;
  const percent = Math.round((done/60)*100);
  const next = tasks.find(t => !state.completed.includes(t.day)) || tasks[59];
  return <Page title="Good to see you, Rishabh." subtitle="Your next proof of work is closer than you think.">
    <div className="stats">
      <Stat label="Current streak" value={done ? `${done} days` : "0 days"} note={done ? "Keep shipping" : "Start with Day 1"} />
      <Stat label="Challenge progress" value={`${percent}%`} note={`${done}/60 completed`} />
      <Stat label="Standing" value={done >= 30 ? "Builder" : "Rising"} note="Consistency signal" />
    </div>
    <div className="grid-2">
      <article className="card focus-card"><div className="card-top"><span className="tag">NEXT MISSION</span><span>DAY {next.day}</span></div><h2>{next.title}</h2><p>{next.description}</p><Link className="btn primary" to={`/day/${next.day}`}>Open challenge →</Link></article>
      <ProgressRing percent={percent} />
    </div>
    <div className="section-title"><h2>Your 60-day path</h2><Link to="/progress">View all →</Link></div>
    <DayStrip state={state}/>
  </Page>;
}

function Stat({label,value,note}) { return <article className="stat card"><span>{label}</span><strong>{value}</strong><small>{note}</small></article>; }

function ProgressRing({percent}) { return <article className="card ring-card"><div className="ring" style={{"--p":`${percent*3.6}deg`}}><div><b>{percent}%</b><span>complete</span></div></div><div><span className="tag">OVERALL</span><h3>Progress that persists</h3><p>Your completed days are stored locally and survive refresh.</p></div></article>; }

function DayStrip({state}) { return <div className="day-strip">{tasks.slice(0,14).map(t=><Link key={t.day} to={`/day/${t.day}`} className={state.completed.includes(t.day) ? "day-chip done" : t.day === 12 ? "day-chip current" : "day-chip"}><small>DAY</small><b>{t.day}</b><span>{state.completed.includes(t.day) ? "✓" : t.day === 12 ? "→" : "·"}</span></Link>)}</div>; }

function Day({ state, setState }) {
  const { day } = useParams();
  const dayNumber = Number(day);
  const d = tasks[dayNumber - 1];

  const old = state.proofs[day] || {};

  const [repo, setRepo] = useState(old.repo || "");
  const [commit, setCommit] = useState(old.commit || "");
  const [li, setLi] = useState(old.li || "");

  const [r, setR] = useState(null);
  const [c, setC] = useState(null);
  const [l, setL] = useState(null);

  const [answers, setAnswers] = useState(old.answers || {});
  const [quizSubmitted, setQuizSubmitted] = useState(
    old.quizSubmitted || false
  );

  if (!d) {
    return (
      <Page title="Day not found">
        <article className="card">
          This challenge day does not exist.
        </article>
      </Page>
    );
  }

  const isProofDay = d.type === "proof";

  const correctAnswers = d.questions
    ? d.questions.filter(
        (question, index) => answers[index] === question.answer
      ).length
    : 0;

  const quizPassed =
    d.questions &&
    d.questions.length > 0 &&
    correctAnswers === d.questions.length;

  const proofPassed = [r, c, l].filter(x => x?.ok).length === 3;

  const completed = state.completed.includes(dayNumber);

  function selectAnswer(questionIndex, answerIndex) {
    if (completed) return;

    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
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
          verifiedAt: new Date().toISOString()
        }
      },

      completed: Array.from(
        new Set([...state.completed, dayNumber])
      )
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
          verifiedAt: new Date().toISOString()
        }
      },

      completed: Array.from(
        new Set([...state.completed, dayNumber])
      )
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

      <div className="day-hero card">
        <span className="tag">
          {isProofDay ? "REAL EVIDENCE" : "DAILY CHALLENGE"}
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
      </div>


      {isProofDay ? (

        <div className="proof-layout">

          <article className="card proof-card">

            <div className="section-title">
              <div>
                <h2>Submit proof of work</h2>
                <p>All 3 checks must pass.</p>
              </div>

              <b className="counter">
                {[r, c, l].filter(x => x?.ok).length}/3
              </b>
            </div>


            <Proof
              label="GitHub repository"
              value={repo}
              set={setRepo}
              placeholder="https://github.com/owner/repository"
              action={async () =>
                setR(await verifyRepo(repo))
              }
              result={r}
            />


            <Proof
              label="GitHub commit"
              value={commit}
              set={setCommit}
              placeholder="https://github.com/owner/repo/commit/abc123"
              action={async () =>
                setC(await verifyCommit(commit, repo))
              }
              result={c}
            />


            <Proof
              label="LinkedIn post"
              value={li}
              set={setLi}
              placeholder="https://www.linkedin.com/posts/..."
              action={() =>
                setL(verifyLinkedIn(li))
              }
              result={l}
            />


            <div className="notice">
              ⓘ GitHub repository and commit URLs are checked by the
              demo verifier. LinkedIn ownership requires a production
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

            <span className="tag">
              DAY FLOW
            </span>

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
                Answer all questions correctly to complete this day.
              </p>
            </div>

            <b className="counter">
              {correctAnswers}/{d.questions.length}
            </b>

          </div>


          <div className="quiz-list">

            {d.questions.map((question, questionIndex) => (

              <div
                className="quiz-question"
                key={questionIndex}
              >

                <h3>
                  {questionIndex + 1}. {question.question}
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

            ))}

          </div>


          {quizSubmitted && !quizPassed && (

            <div className="result bad">
              ! Some answers are incorrect.
              Review the questions and try again.
            </div>

          )}


          {quizPassed && !completed && (

            <div className="result ok">
              ✓ All answers are correct. You can complete this day.
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

function Proof({label,value,set,placeholder,action,result}) { return <div className="proof"><label>{label}</label><div className="input-row"><input value={value} onChange={e=>set(e.target.value)} placeholder={placeholder}/><button className="btn secondary" onClick={action}>Verify</button></div>{result&&<div className={result.ok?"result ok":"result bad"}>{result.ok?"✓":"!"} {result.msg}</div>}</div>; }

function Progress({state}) { const percent=Math.round(state.completed.length/60*100); return <Page title="Your progress" subtitle="No work, no progress. Real work, real movement."><div className="stats"><Stat label="Completed days" value={`${state.completed.length}/60`} note="Verified submissions"/><Stat label="Progress" value={`${percent}%`} note="Persisted locally"/><Stat label="Next day" value={state.completed.length<60?state.completed.length+1:60} note="Keep building"/></div><div className="calendar card">{tasks.map(t=><Link key={t.day} to={`/day/${t.day}`} className={state.completed.includes(t.day)?"calendar-day done":"calendar-day"}><small>{t.day}</small><span>{state.completed.includes(t.day)?"✓":"○"}</span></Link>)}</div></Page>; }

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
      if (completedDays[i] === completedDays[i - 1] + 1) {
        streak++;
      } else {
        streak = 1;
      }

      longestStreak = Math.max(longestStreak, streak);
    }

    currentStreak = 1;

    for (let i = completedDays.length - 1; i > 0; i--) {
      if (completedDays[i] === completedDays[i - 1] + 1) {
        currentStreak++;
      } else {
        break;
      }
    }
  }

  const unlockedRewards = streakRewards.filter(
    reward => longestStreak >= reward.streak
  );

  return (
    <Page
      title="Achievements"
      subtitle="Build your streak. Earn your medals."
    >
      <section className="reward-header card">
        <div>
          <span className="tag">STREAK REWARDS</span>
          <h2>{currentStreak} DAY STREAK</h2>
          <p>
            Keep completing consecutive challenges to unlock the next medal.
          </p>
        </div>

        <div className="reward-progress">
          <strong>{longestStreak}</strong>
          <span>Best streak</span>
        </div>
      </section>

      <section className="reward-grid">
        {streakRewards.map(reward => {
          const unlocked = longestStreak >= reward.streak;

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

                <div className={`medal medal-${reward.id}`}>
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
      </section>

      <section className="achievement-section">
        <div className="achievement-head">
          <div>
            <span className="tag">CHALLENGE BADGES</span>
            <h2>
              {achievements.filter(
                a => state.completed.length >= a.day
              ).length}
              /{achievements.length}
            </h2>
            <p>
              Complete challenge milestones to unlock badges.
            </p>
          </div>
        </div>

        <div className="achievement-grid">
          {achievements.map(a => {
            const ok = state.completed.length >= a.day;

            return (
              <article
                className={
                  ok
                    ? "achievement unlocked"
                    : "achievement locked"
                }
                key={a.id}
              >
                <div className="badge">
                  {ok ? "◆" : "🔒"}
                </div>

                <div>
                  <h3>{a.title}</h3>
                  <p>{a.detail}</p>

                  <small>
                    {ok
                      ? "Unlocked"
                      : `Complete Day ${a.day}`}
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

function Learn() { const [open,setOpen]=useState(null); return <Page title="Learn & build" subtitle="Short, actionable lessons connected to the challenge."><div className="learn-grid">{guides.map((g,i)=><article className="learn-card card" key={g.title} onClick={()=>setOpen(open===i?null:i)}><span className="tag">LESSON {i+1}</span><h2>{g.title}</h2><p>{open===i?g.body:"Tap to open the explanation and practical flow."}</p><div className="mini-flow"><span>Learn</span><i>→</i><span>Build</span><i>→</i><span>Prove</span></div></article>)}</div></Page>; }

function Community({state,setState}) { const [name,setName]=useState(""),[college,setCollege]=useState(""),[message,setMessage]=useState(""); function join(){if(!name.trim()||!college.trim())return setMessage("Enter your name and college."); const exists=state.members.some(m=>m.name.toLowerCase()===name.trim().toLowerCase()); if(exists)return setMessage("This member is already in the demo community."); const next={...state,members:[...state.members,{id:crypto.randomUUID(),name:name.trim(),college:college.trim(),joinedAt:new Date().toISOString()}]};setState(next);setName("");setCollege("");setMessage("Joined the community successfully.");} return <Page title="Community" subtitle="A public student space. Anyone can join this demo community."><div className="grid-2"><article className="card"><span className="tag">JOIN PUBLICLY</span><h2>Find your builders</h2><p>No owner approval is required in this demo. Each browser prevents the same name from being added twice.</p><input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/><input value={college} onChange={e=>setCollege(e.target.value)} placeholder="College name"/><button className="btn primary full" onClick={join}>Join community →</button>{message&&<div className="notice">{message}</div>}</article><article className="card"><div className="section-title"><h2>Members</h2><b>{state.members.length}</b></div>{state.members.length===0?<div className="empty">No members yet. Be the first to join.</div>:<div className="members">{state.members.map(m=><div className="member" key={m.id}><div className="avatar">{m.name[0]}</div><div><b>{m.name}</b><span>{m.college}</span></div></div>)}</div>}</article></div></Page>; }

function Help() { return <Page title="Help Center" subtitle="Everything you need to complete a day correctly."><div className="help-list">{guides.map((g,i)=><article className="card help" key={g.title}><div className="help-num">0{i+1}</div><div><h2>{g.title}</h2><p>{g.body}</p></div></article>)}</div><article className="card"><h2>URL examples</h2><div className="url-example">GitHub repo: https://github.com/your-name/your-repo</div><div className="url-example">GitHub commit: https://github.com/your-name/your-repo/commit/abc123</div><div className="url-example">LinkedIn post: https://www.linkedin.com/posts/your-post</div></article></Page>; }

function Profile({state,setState}) { const [editing,setEditing]=useState(false); const [form,setForm]=useState(state.profile); function saveProfile(){setState({...state,profile:form});setEditing(false);} return <Page title="Profile" subtitle="Your public challenge identity."><article className="profile-card card"><div className="profile-avatar">RP</div><div className="profile-info">{editing?<><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><input value={form.college} onChange={e=>setForm({...form,college:e.target.value})}/><input value={form.year} onChange={e=>setForm({...form,year:e.target.value})}/><button className="btn primary" onClick={saveProfile}>Save profile</button></>:<><span className="tag">STUDENT PROFILE</span><h1>{state.profile.name}</h1><p>{state.profile.year} • {state.profile.college}</p><button className="btn secondary" onClick={()=>setEditing(true)}>Edit profile</button></>}</div></article><article className="card owner-card"><span className="tag">OWNER MODE</span><h2>Demo owner controls</h2><p>Owner editing is simulated in this frontend-only hackathon build. Never put real passwords/API keys in React or GitHub.</p><div className="notice">For production, move authentication and authorization to a backend with secure sessions.</div></article></Page>; }

function Page({title,subtitle,children}) { return <section className="page"><div className="page-head"><div><span className="eyebrow">ABTALKS</span><h1>{title}</h1><p>{subtitle}</p></div></div>{children}</section>; }

export default App;