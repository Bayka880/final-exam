import React from "react";
import axios from "axios"
import useSWR from "swr";
import Checkbox from '@mui/material/Checkbox';
import AddTask from "./AddTask";

export default function TaskList(){
    const taskApi = `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/todo`;
    const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
    const { data, error, mutate } = useSWR(taskApi, fetcher);
    console.log(data)
    const [checked, setChecked] = React.useState([true,false]);
    const handleChange = (event) => {
        console.log(event.defaultValue)
        setChecked(event.target.checked);
    };
    
    return(
    <div className="task-lists">
        <div className="my-todo">My Todo list /{data?.length}</div>
    {
        data?.map((item,  i)=>{
            return <div key = {i}className="items">
                 <Checkbox
      value={item.taskName}
      defaultChecked={checked [0] && checked[1]}
     onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />{item.taskName} <hr></hr></div>
    
        })
    }
    <AddTask mutate={mutate}/>
    </div>)
}