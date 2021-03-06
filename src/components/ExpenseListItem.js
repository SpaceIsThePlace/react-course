import moment from 'moment';
import numeral from 'numeral';
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
    <div>
        <Link to = {`/edit/${props.id}`}>
            <h3>{props.description}</h3>
        </Link>        
        <p>
            {numeral(props.amount / 100).format('$0,00.00')} 
                -
            {moment(props.createdAt).format('MMMM Do, YYYY')};
        </p>       
    </div>
)

export default ExpenseListItem;