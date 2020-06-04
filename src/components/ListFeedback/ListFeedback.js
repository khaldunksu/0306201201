import React from 'react';
import './ListFeedback.scss';
import feedbackData from '../ListFeedback/feedback';
import NewComment from '../NewComment/NewComment'
class ListFeedback extends React.Component {
state={
    list:[],
}
    componentDidMount() {
       this.setState({
        list:feedbackData
       })
      }
     
  add = (text) => {
      let d = new Date();
      let date = d.getUTCDay()
      let month = 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',');
      let year = d.getFullYear()
      let fullDate = `${date} ${month[d.getMonth()]} ${year}`;
    this.setState(prevState => ({
      list: [...prevState.list, {
        name: 'Anonymous',
        text,
        date: fullDate
      }],
    }));
  }
    render(){
        return(
            <section >
             <div className="list">
                 {this.state.list.map(i=>(
                     <>
                     <div className="list_wrap">
                     <p className="list_name">{i.name}</p>
                     <p className="header_inform_vacancy">{i.date}</p>
                     </div>
  <div class="block">
    {i.text}
  </div>

                     </>
                 ))}

             </div>
             <NewComment add={this.add}/>

            </section>
        )
    }
}
export default ListFeedback