import React, {Component, Fragment} from 'react'

export default class Form extends Component {
    render() {
        return (
            <Fragment>
                <form onSubmit={
                    this.props.getWeather
                }>
                    <input name="city" placeholder="City..." type="text"/>
                    <input name="country" placeholder="Country..." type="text"/>
                    <button>Get Weather</button>
                </form>
            </Fragment>
        )
    }
}
