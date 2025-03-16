export default async function Read(props){ //url read/1,2,3 넘버 받아오기
    const id = props.params.id;
    const resp = await fetch(`http://localhost:9999/topics/${id}`);
    console.log(resp);
    const topic = await resp.json();
    return(
        <>
            <h2>{topic.title}</h2>
            {topic.body}
        </>    
    )
}