import './App.css';
import { useEffect, useState } from 'react';
import firebase from "./firebase";

function App() {

  const [gamers, setGamers] = useState([]);

  useEffect(() => {
    let db = firebase.firestore()
    let data = db.collection("Gamers");

    data.onSnapshot((querySnapShop) => {
      const items = [];
      querySnapShop.forEach((doc) => {
        items.push(doc.data())
      });

      setGamers(items);
      console.log(items)

    });
  }, [])

  return (
    <div className="App">

      <header className="App-header">
        <h1>Gamers Unite</h1>

        <table>
          <thead>
            <th>Name</th>
            <th>Grade</th>
            <th>Score</th>
          </thead>
          <tbody>
            {
              gamers.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.grade}</td>
                  <td>{item.score}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </header>

    </div>
  );
}

export default App;
