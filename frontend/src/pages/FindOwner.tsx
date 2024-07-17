import { Link } from "react-router-dom";

export const FindOwner = () => {
  return (
    <>
      <h2>Find Owners</h2>

      <form className="form-horizontal" id="search-owner-form">
        <div className="form-group">
          <div className="control-group" id="lastNameGroup">
            <label className="col-sm-2 control-label">Last name </label>
            <div className="col-sm-10">
              <input className="form-control" maxLength={80} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <Link className="btn btn-primary" to="/owners" onClick={() => {}}>
              Find Owner
            </Link>
          </div>
        </div>

        <Link className="btn btn-primary" to="/owners/new">
          Add Owner
        </Link>
      </form>
    </>
  );
};
