import React from 'react';
import './ServiceList.scss';


const ServiceList = () => {
    return (
      
        <section className="services">
            <p className="services_serv">Услуг</p>
            <div className="services_block">
                <div className="services_block_name">
                    <p className="bgText1">Ручное бронирование</p>
                    <div className="bgText2"><p>Пакетные туры</p></div>
                    <p className="bgText3">Отели</p>
                </div>
                <div className="services_block_number">
                    <p>11</p>
                    <p className="num">3</p>
                    <p>1</p>
                </div>
            </div>
            <div className="services_all">
            <div className="services_block_name">
                  <p className="services_all_text">Всего</p>
                  </div>
                  <div className="services_block_number">
                <p className="services_all_num">15</p>
                </div>
            </div>
           
        </section>
      
      
    )
}
export default ServiceList