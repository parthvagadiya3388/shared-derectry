import "./style.css";

export default function MyComponents({ isProject2 }) {
  return (
    <form>
      <div className="card">
        <div className="card-header">User Information</div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        {!isProject2 && (
          <>
            <div className="form-group">
              <label htmlFor="position">Position:</label>
              <input type="text" id="position" name="position" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" />
            </div>
          </>
        )}
        <div>
          <input type="submit" value="Submit" className="submit-button" />
        </div>
      </div>
    </form>
  );
}
