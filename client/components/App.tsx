function App() {
  return (
     <div className="container">
      <div className="header">
        <h1>App</h1>

        <div className="center">
          <form className="text-black flex flex-col">
            <label htmlFor="title">Type Here</label>
            <input type="text" name="title" id="title" />
          </form>
        </div>
        <div className="center">
          <button className="button" type="submit">
            Click me
          </button>
        </div>

        <p>What your idea!</p>
      </div>

      <div className="box">
        <p>Hi</p>
      </div>
    </div>
  )
}

export default App
