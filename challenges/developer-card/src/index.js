import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"



const App = () => {
  return (    
    <div class="card">
      <Header/>
      <Main />
      <Skills />
    </div>
  );
}

const Header = () => {
  return (<img class="profile-img" src="focaccia.jpg" alt="user pic"/>);
}

const Main = () => {
  return (
    <div>
      <h1 class="profile-name">Kaushik K</h1>
      <p class="about-me">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima magni nostrum neque quod officiis illo, dolorum harum omnis obcaecati mollitia. Blanditiis id, vitae ipsum sint rerum ullam aut quo. Est expedita esse in consequatur aspernatur praesentium consectetur dolorem mollitia? Dolor illo nobis, a iste pariatur laborum amet error earum.</p>
    </div>
  );
}

const Skills = () =>{
  return (
  <ul class="skills">
    <li>HTML + CSS</li>
    <li>JAVASCRIPT</li>
    <li>PYTHON</li>
    <li>GIT GITHUB</li>
    <li>AWS</li>
    <li>REACT</li>
  </ul>);
}

// const

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);