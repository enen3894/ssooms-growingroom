
'use client'
import { useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const [uploaded, setUploaded] = useState([]);

  const [diary, setDiary] = useState("");
  const [diaryList, setDiaryList] = useState([]);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  if (!isLoggedIn) {
    return (
      <main style={{ padding: 24 }}>
        <h1>슘쌤의 그로잉룸 로그인</h1>
        <input placeholder="아이디" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={() => {
          if (username === "student" && password === "1234") setIsLoggedIn(true);
          else alert("로그인 정보가 올바르지 않습니다.");
        }}>로그인</button>
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>슘쌤의 그로잉룸</h1>

      <section>
        <h2>자료 업로드</h2>
        <input value={title} placeholder="자료 제목" onChange={e => setTitle(e.target.value)} />
        <input type="file" multiple onChange={e => setFiles(Array.from(e.target.files))} />
        <button onClick={() => {
          if (title && files.length > 0) {
            setUploaded([...uploaded, { title, files }]);
            setTitle(""); setFiles([]);
          }
        }}>업로드</button>
        {uploaded.map((entry, idx) => (
          <div key={idx}>
            <strong>{entry.title}</strong>
            <ul>{entry.files.map((f, i) => <li key={i}>{f.name}</li>)}</ul>
          </div>
        ))}
      </section>

      <section>
        <h2>연습 일지</h2>
        <textarea value={diary} onChange={e => setDiary(e.target.value)} />
        <button onClick={() => {
          if (diary) {
            setDiaryList([...diaryList, diary]);
            setDiary("");
          }
        }}>작성</button>
        <ul>{diaryList.map((d, i) => <li key={i}>{d}</li>)}</ul>
      </section>

      <section>
        <h2>댓글/피드백</h2>
        <textarea value={comment} onChange={e => setComment(e.target.value)} />
        <button onClick={() => {
          if (comment) {
            setComments([...comments, comment]);
            setComment("");
          }
        }}>등록</button>
        <ul>{comments.map((c, i) => <li key={i}>{c}</li>)}</ul>
      </section>
    </main>
  );
}
