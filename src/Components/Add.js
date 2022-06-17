const Add = ({addTodo,title,handleTitle,time,handleTime}) => {
    return ( 
        <form onSubmit={addTodo} className="flex p-2 flex-row justify-center w-2/3 m-auto">
        <input type="text" className="p-2  border-2 bg-slate-100 w-full text-2xl" value={title} onChange={handleTitle}/>
        <input type="time" className="p-2  border-2 bg-slate-100 w-1/3 text-2xl" value={time} onChange={handleTime}/>
        <input type="submit" className="p-2 bg-slate-500 text-white w-1/3" onClick={addTodo} value="Add New Task" />
    </form>
     );
}
 
export default Add;