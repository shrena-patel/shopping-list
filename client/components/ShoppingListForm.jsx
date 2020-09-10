import React from 'react'


class ShoppingListForm extends React.Component {
    state = {
        item: ''
    }

    //handleChange
    //handleSubmit


    render() {
        return (
            <>
                <form>
                    <input type="text" name="item" />
                    <button type="Submit">Add item</button>
                </form>
            </>
        )
    }
}

export default ShoppingListForm