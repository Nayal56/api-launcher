import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Dropdown.css';

const Dropdown = (api) => {
  return (
    <div class="mylist">
     <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target={"#".concat(api.api)} aria-expanded="false" aria-controls="collapseExample">
    {api.api}
  </button>
    <ul id={api.api} class="collapse" >
      <li class="list-group-item"><a  href="#">GET</a></li>
      <li class="list-group-item"><a  href="#">POST</a></li>
      <li class="list-group-item"><a  href="#">PUT</a></li>
      <li class="list-group-item"><a  href="#">DELETE</a></li>
      <li class="list-group-item"><a  href="#">FIND</a></li>
    </ul>
  </div>
  
  );
};

export default Dropdown;
