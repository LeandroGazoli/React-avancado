import React, { useEffect, useState } from "react";
import "./style.css";

//https://sujeitoprogramador.com/rn-api/?api=posts
function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const post = await fetch(
        "https://sujeitoprogramador.com/rn-api/?api=posts"
      );

      const postagens = await post.json();

      setNutri(postagens);
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} />

            <p>{item.subtitulo}</p>
          </article>
        );
      })}
    </div>
  );
}

export default App;
