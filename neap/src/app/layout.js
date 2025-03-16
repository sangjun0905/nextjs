// 루트 layout
//"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; //single page application


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = { //서버 컴포넌트에서만 사용 가능
  title: "sangjun nextjs",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) { //children은 page.js에서 만들어진 컴포넌트를 props로 전달하는 내장어
  const resp = await fetch('http://localhost:9999/topics');
  const topics = await resp.json();
  
  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map(topic=>{
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
        {children}
        <ul>
          <li><Link href="/create">Create</Link></li>
          <li><Link href="/update/id">Update</Link></li>
          <li><button>delete</button></li>
        </ul>
      </body>
    </html>
  );
}
