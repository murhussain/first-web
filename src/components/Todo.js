import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props) {

  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function deleteHandler() {
    setmodalIsOpen(true);
  }

  function closeModalHandler() {
    setmodalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>

      {/* {modalIsOpen ? <Modal /> : null} */}
      {/* A short hand JS notation */ }
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
      { modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
    </div>
  );
}

export default Todo;