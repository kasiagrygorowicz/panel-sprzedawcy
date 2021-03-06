import classes from './OrdersSummary.module.css'

function OrdersSummary(props){

    return(
        <div className={classes.contentStyle}>
            <div className={classes.ordersNumber}>
                {props.allOrders}
            </div>
            <div className={classes.ordersLabel}>
                {props.msg}
            </div>
        </div>
    );

}

export default OrdersSummary;