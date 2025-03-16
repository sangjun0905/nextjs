//page.js는 약속된 파일
// app 폴더 내에  url과 같은 이름의 폴더를 찾고 page.js 파일을 찾고, layout.js 가 있다면 결합, 
// 없다면 부모 폴더의 layout의 children으로 활용

//"create"라는 url입력 대응으로 create 폴더의 page.js와 layout.js 결합하여 화면 라우팅
//약속된 파일명
import {useRouter} from "next/navigation"

'use client'
  
import { useRouter } from "next/navigation";
  
export default function Create(){
  const router = useRouter();
  return <form onSubmit={async evt=>{
    evt.preventDefault();
    const title = evt.target.title.value;
    const body = evt.target.body.value;
    const resp = await fetch('http://localhost:9999/topics/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, body})
    });
    const topic = await resp.json();
    console.log("file: page.js:19 ~ Create ~ topic:", topic)
    router.push(`/read/${topic.id}`);
    router.refresh();
  }}>
    <h2>Create</h2>
    <p><input type="text" name="title" placeholder="title" /></p>
    <p><textarea name="body" placeholder="body"></textarea></p>
    <p><input type="submit" value="create" /></p>
  </form>
}