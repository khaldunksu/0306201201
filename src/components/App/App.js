import React from 'react';
import './App.scss';
import ServiceList from '../ServiceList/ServiceList';
import Feedback from '../Feedback/Feedback';
import ListFeedback from '../ListFeedback/ListFeedback'

function App() {
  return (
    <div className="App"> 
      <header className="header">
        <div className="header_photo">
          <img src={require("../App/photo.png")} alt="Veronika Rostova" className="header_photo_img"/>
        </div>
        <div className="header_inform">
          <h1 className="header_inform_name">Вероника Ростова</h1>
          <p className="header_inform_vacancy">Менеджер по продажам</p>
          <div className="header_inform_detail">
            <p className="header_inform_detail_text">Подберу для вас самые лучшие предложения. Мои услуги абсолютно</p>
          </div>
        </div>
      </header>
<ServiceList/>
<Feedback/>
<ListFeedback/>
    </div>
  );
}

export default App;
