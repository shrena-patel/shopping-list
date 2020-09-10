import React from 'react'

import ShoppingListForm from './ShoppingListForm'

class ShoppingList extends React.Component {

    render() {
        return (
            <>
            <article className="tile is-child notification is-success">
                <div className="content">
                    <h1 className="title">Shopping List</h1>
                    <div className="content">
                    <ShoppingListForm />
                    </div>
                </div>
            </article>
            </>
        )
    }
}

export default ShoppingList