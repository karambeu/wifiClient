import React from 'react'; 
import Image from 'next/image';
const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="left-section">
          <Image 
          src="/loginform.jpg" 
          alt="Image de présentation" 
          width={1280}
          height={1920}
          className='img-fluid'
          />
        </div>
        <div className="right-section">
          <h2 className="title">Bienvenue</h2>
          <p className="description">Connectez-vous à votre compte</p>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Entrez votre email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" placeholder="Entrez votre mot de passe" />
            </div>
            <button type="submit">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
