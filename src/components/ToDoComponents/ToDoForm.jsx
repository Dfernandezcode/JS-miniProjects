import { useState } from "react";
import PropTypes from "prop-types";
import plusIcon from "../../assets/plusIcon.svg";
import "./ToDoForm.scss";

const ToDoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return; // don't add empty items.
    onSubmit(newItem);

    setNewItem(""); // reset the input field back to empty.
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="add-task">
        <input className="add-task__field" id="item" type="text" placeholder="Add a new task" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button className="add-task__btn" type="submit">
          <img src={plusIcon} alt="Plus Icon" className="add-task__icon" />
        </button>
      </div>
    </form>
  );
};

ToDoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ToDoForm;
