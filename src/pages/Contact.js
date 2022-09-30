import React from "react";

const Contact = () => {
  return (
    <div className="main">
      <h1>Contactez-moi</h1>
      <form action="#" method="post">
        <label htmlFor="texte"></label>
        <br />
        <textarea
          id="contacttextarea"
          name="textarea"
          cols="100"
          rows="15"
          required
          placeholder="Ecrivez votre texte ici..."
        ></textarea>
        <br />
      </form>
      <input className="btnSubmit" type="submit" value="Envoyer" />
      <br />
      <br />
      <div className="contactmail">
        <strong>
          Ou envoyez moi un mail directement en cliquant
          <a href="mailto:angelique.renard@hotmail.fr"> ici! </a>
        </strong>
      </div>
    </div>
  );
};

export default Contact;
