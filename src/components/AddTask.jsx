import { useState } from "react";
 
function AddTask( {onTaskAddClick} ) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  return (
    <div className="create-container">
        <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
        <input type="text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}/>
        {console.log(title, description)}
        <button type="submit" onClick={() => {
            if (title.trim() === "" || description.trim() === "") {
                return alert("Both title and description are required.");
            }
            onTaskAddClick(title, description);
            setTitle("");
            setDescription("");
        }}
        >SUBMIT</button>
    </div>
  )
}

export default AddTask;