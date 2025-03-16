# nextjs
디렉토리 지정 후
npx create-next-app@latest .
npm run dev // 개발자 시작
npm run build // 실 서비스 시작
npm run start // 실 서비스 배포

ROUTING 이란? 경로에 따라 어떤걸 보여줄 지 정하는 것    
http://a.com/dashboard/analytics/
       domain segment   segment
              I     path      I

app 폴더에 create 폴더를 만들고 page.js 파일을 만들었더니 url을 /create로 이동했을 때 page.js에 만들어놓은 컴포넌트가 자동으로 실행
// 경로 넘버에 따른 다이나믹 라우팅(일일이 만드는 것은 힘듦)


백엔드
npx json-server --port 9999 --watch db.json
웹 콘솔 
fetch('http://localhost:9999/topics')
  .then((resp) => resp.json())
  .then((result) => { console.log('result', result); });
로컬 서버에 접근해서 json 파일을 가져온 뒤 출력

Server Component: // 정보 출력 nextjs는 기본적으로 컴포넌트를 서버 컴포넌트로 간주주
secure data
cookieheader
fetch

client component: // 사용자와 상호작용 //"use client"
useState, useEffect
onClink, onChange
useRouter, useParams
fetch