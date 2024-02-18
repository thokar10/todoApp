import { useState } from "react";
import "./Todo.css";
import { MdDelete } from "react-icons/md";

const SingleTodo = ({ datas, key, onDelete }) => {
  const [isDone, setIsDone] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const makeDone = () => {
    setIsDone(true);
  };

  const change = () => {
    setIsDone(false);
  };

  const deleteTodo = () => {
    onDelete();
    setIsDone(false);
  };
  const showDelete = () => {
    setShowButton(true);
  };
  const hideDelete = () => {
    setShowButton(false);
  };

  return (
    <>
      <div
        className="show-content"
        onMouseOver={showDelete}
        onMouseOut={hideDelete}
      >
        <div className="show">
          {isDone ? (
            <>
              <div
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "white",
                  color: "orange",
                }}
              >
                {datas}
              </div>
              <div className="checkbox-delete">
                <input type="checkbox" onChange={change} />
                {showButton === true && <MdDelete onClick={deleteTodo} />}
              </div>
            </>
          ) : (
            <>
              <div>{datas}</div>
              <div className="checkbox-delete">
                <input type="checkbox" onClick={makeDone} checked={false} />

                {showButton === true && <MdDelete onClick={deleteTodo} />}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default SingleTodo;
