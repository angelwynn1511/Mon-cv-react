import React from "react";

const Contact = () => {
  return (
    <div>
      <form action="#" method="post">
        <label htmlFor="texte">
          <strong> Envoyez-moi un hibou!</strong>
        </label>
        <br />
        <textarea
          id="contacttextarea"
          name="textarea"
          cols="100"
          rows="15"
          required
          placeholder="Si vous croisez Dumbledore, dites-lui que j'attends toujours ma lettre pour Poudlard.
            En attendant, vous pouvez toujours m'écrire ici..."
        ></textarea>
        <br />
      </form>
      <input type="submit" value="Envoyer" />
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
