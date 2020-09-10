import React from 'react'

import ShoppingListForm from './ShoppingListForm'
import { connect } from 'react-redux'
import { deleleItem } from '../actions/shopping'

class ShoppingList extends React.Component {

    render() {
        return (
            <>
                <article className="tile is-child notification is-success">
                    <div className="content">
                        <h1 className="title">Shopping List</h1>
                        <div className="content">
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
                        </div>
                    </div>
                </article>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return { shopping: globalState.shopping }
}

export default connect(mapStateToProps)(ShoppingList)

