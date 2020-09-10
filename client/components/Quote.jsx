import React from "react";
import { getQuote } from "../apis/quote";

class Quote extends React.Component {
    state = {   
        quote:{}
    }

    componentDidMount() {
        this.nextQuote();
    }

    nextQuote = () => {
        getQuote().then((quote) => {
            this.setState({
                quote:quote,
            })
        })
    }

    render() {
        const quote = this.state.quote
        return (
        <>
        <article className="tile is-child notification is-danger">
            <p className="title">Daily Quote</p>
            {quote.en && <h3> { quote.en }
            </h3>}      
        </article>
        </>
        )
    }
}

export default Quote;
