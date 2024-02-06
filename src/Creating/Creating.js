
import "./Creating.css"
import FormCreate from "./Form_Create"

import Introduction from '../Login/Introduction/Introduction';

function Creating({userList,setuserList}) {
  return (
    <div className="container px-4 text-center">
      <div className="col-4">
          <FormCreate userList={userList} setuserList={setuserList}></FormCreate>
      </div>
      <div className="col-6">
          <Introduction></Introduction>
      </div>
    </div>
  );
}

export default Creating;
