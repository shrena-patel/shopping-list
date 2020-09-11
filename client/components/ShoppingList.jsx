import React from 'react'

import ShoppingListForm from './ShoppingListForm'
import { connect } from 'react-redux'
import { deleleItem } from '../actions/shopping'

import { getAllItems, apiDeleteItem} from '../apis/shopping'
import { initItem } from '../actions/shopping'

class ShoppingList extends React.Component {

    componentDidMount() {
        //api request function
        getAllItems()
            .then(item => (this.props.dispatch(initItem(item))))
    }

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
                                        <li key={item.id}>{item.name} <button type="button" onClick={() => {
                                            apiDeleteItem(item.id)
                                                .then(() => {
                                        
                                                    this.props.dispatch(deleleItem(item))

                                                })
                                            
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

