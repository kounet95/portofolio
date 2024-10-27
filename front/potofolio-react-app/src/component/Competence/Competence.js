import React from 'react';
import './competence.css'; 
export const Competence = ({ competence }) => {

  console.log('Données de compétence:', competence);

  if (!competence) {
    return <div>Aucune donnée de compétence disponible.</div>;
  }

  const langafrawork = [
    {
      name: "React",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/react.png",
    },
    {
      name: "Angular",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/angular.png",
    },
    {
      name: "Java",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/java.png",
    },
    {
      name: "Eco Systeme de Spring",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/Eco%20Systeme%20de%20Spring.png",
    },
    {
      name: "JavaScript",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/javascript.png",
    },
    {
      name: "Symfony",
      imgUrl: "https://raw.githubusercontent.com/kounet95/portofolio-images/main/symfony.png",
    },
  ];

  return (



    <div className="card h-100">
      
    <div className="card-body">
      <div className="image-container d-flex justify-content-end mb-3">
        {langafrawork.map((item, index) => {
          
          if (item.name === competence.framework) {
            return (
              <div key={index} className="mx-2">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="rounded-circle"
                  style={{ height: '80px', width: '80px', objectFit: 'cover' }}
                />
              </div>
            );
          }
          return null; 
        })}
      </div>

            <h5 className="card-title">Description: {competence.description || 'Non disponible'}</h5>
            <p className="card-text">Langages: {competence.languages || 'Non disponible'}</p>
            <p className="card-text">Framework: {competence.framework || 'Non disponible'}</p>
            <p className="card-text">Niveau: {competence.level || 'Non disponible'}</p>

     
            <p className="card-text">
              Date: {competence.date ? new Date(competence.date).toLocaleDateString() : 'Non disponible'}
            </p>

 
            {competence.lienGit && (
              <p className="card-text">
                Lien Git: <a href={competence.lienGit} target="_blank" rel="noopener noreferrer">{competence.lienGit}</a>
              </p>
            )}
            {competence.videoPresentation && (
              <div className="mt-3">
                <video width="100%" controls>
                  <source src={competence.videoPresentation} type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video>
              </div>
            )}
          </div>
        </div>
  
    
  );
};
