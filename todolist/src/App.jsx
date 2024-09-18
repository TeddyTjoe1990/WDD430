import "./index.css";

export default function App() {
  return (
    <div>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor>New Item</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul classNami="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </div>
  )
}
