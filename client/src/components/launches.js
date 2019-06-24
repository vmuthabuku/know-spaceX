import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './launchItem'
import Keyy from './key'
import '../App.css'


const LAUNCHES_QUERY = gql`
    query LaunchQuery{
        launches{
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export class Launches extends Component {
    render() {
        return (
            <Fragment>
             <h2 className="topic">Launches</h2>
            <Keyy/>
            <Query query={LAUNCHES_QUERY}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <h1>Loading</h1>
                        if(error) console.log(error)
                        console.log(data)
                        return <Fragment>
                            {
                                data.launches.map(launch=>(
                                    <LaunchItem style={{marginTop:"2em"}} key={launch.flight_number} launch={launch}/>
                                ))
                            }
                        </Fragment>
                    }
                }
            </Query>
            </Fragment>
        )
    }
}

export default Launches
