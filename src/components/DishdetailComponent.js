import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends React.Component{

    constructor(props){
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        else
            return(
                <div></div>
            );
    }

    renderComments = (dish) =>{
        if (dish != null){

            if (dish.comments != null){
                let comments = dish.comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}, {comment.date.slice(0,10)}</p>
                        </li>
                    )
                })
                return(
            
                    <div>
                        <h4>Comments</h4>
                        <ul className = "list-unstyled">
                            {comments}
                        </ul>
                    </div>
            
                    );
            }
            else
                return(<div></div>);
        }
    else
        return(
            <div></div>
        );
    }

    render(){
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>                
          </div>
        )
    }
}

export default DishDetail;