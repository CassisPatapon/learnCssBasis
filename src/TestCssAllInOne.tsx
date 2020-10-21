import * as React from "react";
import "./styles.css";

export default function TestCssAllInOne() {
  return (
    <div className="App">
      <h1>Je suis un titre de niveau un</h1>

      <p>
        Ceci est un paragraphe. Dans ce texte il y a un{" "}
        <span>élément span</span>
        et aussi un <a href="http://example.com">lien</a>.
      </p>

      <p class="special">
        Ceci est un second paragraphe. On y trouve un élément{" "}
        <em>mis en valeur</em>.
      </p>

      <ul>
        <li>Item un</li>
        <li class="special">Item deux</li>
        <li>
          Item <em>trois</em>
        </li>
      </ul>
    </div>
  );
}
