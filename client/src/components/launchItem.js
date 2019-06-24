// import React from 'react'

// function LaunchItem(props) {
//        console.log(props.launch)
//        return <div>test</div>
    
// }

// export default LaunchItem

import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import classNames from 'classnames'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const LaunchItem = ({launch: {flight_number, mission_name, launch_date_local, launch_success}}) => (
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
        <Card.Meta> <Moment format="YYYY-DD-MM HH:mm">{launch_date_local}</Moment></Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Link to={`/launch/${flight_number}`}> 
            <Button fluid basic color='green'>
                Launch_Details
            </Button>
            </Link>
         
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default LaunchItem
