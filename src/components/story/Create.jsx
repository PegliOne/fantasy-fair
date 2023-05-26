import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Pamela Heystek');
  const [year, setYear] = useState(2023);
  const [blurb, setBlurb] = useState('');
  const [body, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  function handleSubmit (e) {
    e.preventDefault();
    console.log('Submit form');

    const story = { title, author, year, blurb, body };

    setIsPending(true);

    fetch('http://localhost:8000/stories', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(story)
    }).then(()=> {
      console.log('new story added');
      setIsPending(false);
      history.push('/');
    })
  }

  // Add onChange events to render statement

  return ( 
    <main>
      <h1>Create a Story</h1>
      <h2>Enter your Story here</h2>
      <form onSubmit={handleSubmit}>
        <h3>Story Details</h3>
        <section>
          <div className="form-row">
            <div>
              <label htmlFor="title">Title:</label>
              <input id="title" name="title" type="text" placeholder="Enter your story title..." value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label htmlFor="year">Publication Year:</label>
              <input id="year" name="year" type="number" placeholder="2023" min="1900" max="2023" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div>
              <label htmlFor="author">Author:</label>
              <input id="author" name="author" type="text" placeholder="Pamela Heystek" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <select name="category" id="category">
                <option value="Romance">Romance</option>
                <option value="Action">Action</option>
                <option value="Fantasy">Fantasy</option>
              </select>
            </div>
          </div>  
        </section>
        <h3>Summary</h3>
        <section>
          <textarea name="blurb" id="blurb" cols="82" rows="4" placeholder="Enter a summary for your story..." value={blurb} onChange={(e) => setBlurb(e.target.value)} ></textarea>
        </section>
        <h3>Story</h3>
        <section>
          <textarea name="body" id="body" cols="82" rows="10" placeholder="Enter your story..." value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
        </section>
        <div>
          { !isPending && <button type="submit">Submit Story</button> }
          { isPending && <button type="submit">Submitting Story</button> }
        </div>
      </form>
    </main>
  );
}
 
export default Create;