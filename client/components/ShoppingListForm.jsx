import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/shopping'
import { apiAddItem } from '../apis/shopping'



class ShoppingListForm extends React.Component {
    state = {
        item: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // const currentWombat = this.props.wombat
        // const newWombat = this.state.name
        // this.props.store.dispatch(updateWombat(currentWombat, newWombat))
        // this.props.dispatch(addItem(this.state.item))
        this.setState({ item: '' })

        const newItem = {name: this.state.item}

        apiAddItem(newItem)
            .then(id => {
                newItem.id = id
                this.props.dispatch(addItem(newItem))
    
            })
    }


    render() {
        return (
            <>
                <form className="shopping-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="item" value={this.state.item} onChange={this.handleChange} />
                    <button type="Submit">Add item</button>
                </form>
            </>
        )
    }
}


export default connect()(ShoppingListForm)