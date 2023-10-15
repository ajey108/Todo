import React, { useState } from "react";

const Input = () => {
  const [inputdata, setinputdata] = useState("");
  const [items, setitems] = useState([]);
  const [done, setdone] = useState(false);

  const addtodo = () => {
    if (inputdata !== "") {
      setitems([...items, inputdata]);
      setinputdata("");
    } else {
      alert("enter data");
    }
  };

  // delete to do

  const delTodo = (i) => {
    const newitems = items.filter((val, ind) => {
      return i !== ind;
    });

    setitems(newitems);
  };

  return (
    <div>
      <input
        className="mb-4 w-60"
        type="text"
        placeholder="Enter your text"
        value={inputdata}
        onChange={(e) => setinputdata(e.target.value)}
      />
      <button className="px-2 border-solid " onClick={addtodo}>
        add
      </button>

      <div>
        {items.map((v, i) => {
          return (
            <div key={i} className="flex gap-4">
              <h3
                onClick={(e) => {
                  e.stopPropagation()
                  setdone(!done);
                }}
                className={`${
                  done === true ? "line-through" : ""
                }  select-none border-2 border-red-600 p-2 mb-2 w-60 `}
              >
                {v}
              </h3>
              <button className="border-red-400 w-2" onClick={() => delTodo(i)}>
                del
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Input;
