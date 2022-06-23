const Item = ({ id, title, time, done, removeTodo, setDone }) => {
  return (
    <div className={`flex flex-row p-1 m-1 justify-between bg-green-500 text-white ${done?"bg-slate-300":""} ` }>
      <p className={`p-2 w-full cursor-pointer ${done?"line-through":""}`} onClick={() => setDone(id)}>
        {title}
      </p>

      <p className={`p-2  w-1/3 ${done?"line-through":""}`}>{time}</p>
      <button
        className="p-2 bg-red-500 text-white deletebtn"
        onClick={() => removeTodo(id)}
      >
      </button>
    </div>
  );
};

export default Item;
