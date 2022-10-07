import axios from "axios"

export default function AddTask(){
    const handlerAdd = (e)=>{
        e.preventDefault()
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/todo` , {
            taskName:e.target.addtask.value
        }).then(res=>console.log(res)).catch(err=>console.log(err))
    }
    return(
    <div>
        <form onSubmit={handlerAdd}  style={{
            display:"flex",
            flexDirection:"column",
            width:"400px",
            margin:"auto",
            marginTop:"20px"
        }}>
            <input type="text" name="addtask" placeholder="what's next ?" id="addtask"/>
            <button type="submit" id="addtask-bt">Add task</button>
        </form>
    </div>)
}