
const title = "Blah blah blah this is a title"
const body = "This is a blog post"
const comments = [
  { id: 1, text: "fist comment" },
  { id: 2, text: "second comment" },
  { id: 3, text: "third comment" },
]

function App() {
  return (

    <div>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      <div className="comments">

        <h3>Commments ({comments.length})</h3>
        <ul>
          {comments.map((comments, index)=> (
            <li key={index}>{comments.text}</li>

          ))}
        </ul>
          </div>

    </div>
  );
}

export default App;
