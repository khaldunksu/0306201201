import React from 'react';
import './Feedback.scss';
class Feedback extends React.Component {
    render(){
        return(
            <section className="feedback">
               <div className="feedback_text">
                    <p className="feedback_text_feedback">Последние отзывы</p>
                    <a className="feedback_link" href="!#">Все отзывы</a>
                    </div>
                    <div >
                    <img  src={require("../Feedback/likes.jpg")} alt="likes"/>
                    <img className="feedback_comments" src={require("../Feedback/comments.jpg")} alt="comments"/>
                    </div>
            </section>
        )
    }
}

export default Feedback