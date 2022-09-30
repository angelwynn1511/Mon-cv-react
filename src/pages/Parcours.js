import React from "react";

const Parcours = () => {
  return (
    <div className="main">
      <h1>Parcours</h1> 
      <div className="tableaux">
        <table>
          <thead><h2>Expériences professionnelles</h2></thead>
            <tbody>
              <tr> 
                <td>3 janvier 2021 au 26 août 2021</td>
                <td>Formation Développeur web et web mobile - AFCI Villeneuve d'Ascq</td>
              </tr>    
              <tr> 
                <td>9 mai au 05 août 2022</td>
                <td>Stage Développeuse web et web mobile - Association Cap Solidarités Lille</td>
              </tr> 
              <tr>
                  <td>Février 2019 à juin 2021</td>
                  <td> Crèche People and baby "Tilleul" - Lille</td>
              </tr>
              <tr> 
                  <td>Septembre à décembre 2018</td>
                  <td>Crèche Babilou - Marquette-lez-Lille</td>
              </tr>
              <tr>
                  <td>Juillet à septembre 2018</td>
                  <td>Crèche associative "Enfantillages" - Saint-André-lez-lille</td>
              </tr>
              <tr> 
                  <td>Octobre 2017 à juin 2018</td>
                  <td>Crèche municipale "Au rendez-vous des p'tits loups"</td>
              </tr>
              <tr> 
                  <td>Avril à juillet 2016</td>
                  <td>Crèche Rigolo comme la vie "Noemie" - Roubaix</td>
              </tr>
              <tr> 
                  <td>Juin 2015 à février 2016</td>
                  <td> Stage de 9 mois à la Maison d'enfants à caractère social de Wasquehal </td>
              </tr>
          </tbody>
      </table>
            </div>
            <div className="diplomes">
                <table>
                    <thead><h2>Diplomes</h2></thead>
                    <tbody>
                        <tr> 
                            <td>2016</td>
                            <td>Licence sciences de l'éducation</td>
                        </tr>
                        <tr> 
                            <td>2016</td>
                            <td>Diplôme d'état d'éducatrice de jeunes enfants</td>
                        </tr>
                        <tr>
                            <td>2012</td>
                            <td>CAP Petite enfance</td>
                        </tr>
                        <tr> 
                            <td>2010</td>
                            <td>Licence en arts du spectacle, option cinéma</td>
                        </tr>
                        <tr> 
                            <td>2007</td>
                            <td>Baccalauréat Littéraire</td>
                        </tr>
                        <tr> 
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  );
  

};

export default Parcours;
