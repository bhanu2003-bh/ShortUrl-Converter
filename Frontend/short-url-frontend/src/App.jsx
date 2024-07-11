import { useState, useEffect, useRef } from "react";
import { randomstring } from "./RandomString";
import copy from 'copy-to-clipboard';
import "./App.css";

function App() {
  const [text, settext] = useState({});
  const [output, setoutput] = useState("");
  const [err, seterr] = useState(false);
  const hasMounted = useRef(false);





  useEffect(() => {
    const fun = async () => {
      if (!hasMounted.current) {
        hasMounted.current = true;
        return;
      }
      await fetch(`http://localhost:8000/setdata`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          setoutput("");
          seterr(true);
          console.log(error);
        });
    };

    fun();
  }, [text]);

  function handle(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = {};
    data.forEach((item, key) => {
      obj[key] = item;
    });

    const newurl = `http://localhost:8000/getdata/${randomstring(6)}`;

    settext({ ...obj, newurl: newurl });
    setoutput(newurl);
  }

  console.log("output:" + output);

  return (
    <div>
      <h1 className="head">URL-Shortner</h1>
      <form onSubmit={handle} className="form">
        <label htmlFor="url" className="la">
          Enter the url
        </label>
        <input
          placeholder="URL"
          name="url"
          required
          type="url"
          className="inp"
          onChange={() => seterr(false)}
        ></input>
        <button className="btn">Submit</button>
      </form>
      <label>
        <b>New Url:</b>
      </label>
      <textarea
        name="output"
        id="output"
        className="txt"
        style={err ? { borderColor: "red" } : { borderColor: "black" }}
        value={output}
        readOnly
        type = "url"
      ></textarea>
      <br></br>
      <button onClick={()=>copy(output)}>Copy</button>
    </div>
  );
}

export default App;
