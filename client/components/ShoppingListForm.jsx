import React from 'react'


class ShoppingListForm extends React.Component {
    state = {
        item: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.item]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(

        )
    }

    //handleChange
    //handleSubmit


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

export default ShoppingListForm