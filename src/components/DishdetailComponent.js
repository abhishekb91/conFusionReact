import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

function RenderDish ({dish}) {
    if(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

function RenderComments ({comments}) {
    if (comments) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul>
                    {
                        comments.map((comment) => {
                            return (
                                <li key={comment.id} className="list-unstyled">
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    <p>{comment.comment}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <CommentForm />
            </div>
        )
    } else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.comments}/>
            </div>
        </div>
    );
};

export default DishDetail;