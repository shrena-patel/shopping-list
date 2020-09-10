import React from 'react'
import ShoppingListForm from './ShoppingListForm'
import { connect } from 'react-redux'
import {deleleItem} from '../actions/shopping'

class ShoppingList extends React.Component {

    render() {
        return (
            <>
                <h1>Shopping List</h1>
                <ShoppingListForm />
                <ul>
                   {this.props.shopping.map(item => {
                       return (
                           <li key={item}>{item} <button type="button" onClick={() => {
                               this.props.dispatch(deleleItem(item))
                           }}>Delete item</button></li>
                       )
                   })} 
                </ul>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return {shopping: globalState.shopping}
}

export default connect(mapStateToProps)(ShoppingList)