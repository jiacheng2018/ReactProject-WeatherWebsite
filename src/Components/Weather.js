import React, {Component, Fragment} from 'react'

export default class Weather extends Component {
    render() {
        const {
            error,
            description,
            huminity,
            city,
            country,
            temperature
        } = this.props;
        return (
            <Fragment>
                <div> {
                    city && country &&< p > City : {
                        city
                    },
                    Country : {
                        country
                    }</p>
                }
                    {
                    description &&< p > Description : {
                        description
                    }</p>
                }
                    {
                    temperature && <p>Temperature : {temperature} </p>
                }
                    {
                    error &&< p > Error : {
                        error
                    }</p>
                }</div>
            </Fragment>
        )
    }
}
