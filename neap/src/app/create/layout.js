//"create"라는 url입력 대응으로 create 폴더의 page.js와 layout.js 결합하여 화면 라우팅
//약속된 파일명
export default function layout(props){
    return(
        <form>
            <h2>Create</h2>
            {props.children}
        </form>
    )
}