import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Card } from 'semantic-ui-react'
import { Query } from 'react-apollo'
// import { Link } from 'react-router-dom'
import classNames from 'classnames'

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number:Int!){
        launch(flight_number: $flight_number){
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success
            rocket{
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`

export default class Launch extends Component {
    render() {
        let { flight_number } = this.props.match.params
        flight_number = parseInt(flight_number)
        return (
            <Fragment>
                <Query query={LAUNCH_QUERY} variables={{flight_number}}>
                    {
                        ({loading, error, data})=>{
                            if(loading) return <h4>loading</h4>
                            if(error) console.log(error)

                            const {
                            mission_name,
                            flight_number,
                            launch_year,
                            launch_success,
                            rocket: { rocket_id, rocket_name, rocket_type }
                            } = data.launch;

                            return(
                                <Card.Group>
    <Card style={{width:"100%"}}>
      <Card.Content>
        <Card.Header><h4>
            Mission:{' '}
            <span
              className={classNames({
                'text-success': launch_success,
                'text-danger': !launch_success
              })}
            >
              {mission_name}
            </span>
          </h4> </Card.Header>
        <Card.Meta>launch_year: {launch_year}</Card.Meta>
        <Card.Meta>flight_number{flight_number}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
      <Card.Header>
          Rocket: {rocket_name}<hr></hr>
          Rocket ID: {rocket_id}
      </Card.Header>
      <Card.Description>
          Rocket Type: {rocket_type}
      </Card.Description>
        
      </Card.Content>
    </Card>
  </Card.Group>
                            )

                        }
                    }
                </Query>


            </Fragment>
        )
    }
}
