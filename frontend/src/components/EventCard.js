import React, { Component } from 'react';
import './EventCard.css';
import { Card, Button } from 'semantic-ui-react'

class EventCard extends Component {
	constructor(props){
		super(props);
		
	}

	componentWillMount(){
		if(this.props.match.params.id) {  //check if there is a router param
			console.log(this.props.match.params.id);
		}
	}

	render(){
		return (
			<Card centered>
				<Card.Content textAlign='left'>
					<Card.Meta className='card-event-date'>
						{this.props.eventDate}
					</Card.Meta>
				</Card.Content>
				<Card.Content>
					<Card.Header>
						{this.props.eventName}
					</Card.Header>

					<Card.Description>
						{this.props.eventDescription}
					</Card.Description>
					
				</Card.Content>
			<Button basic color='green'>Attendees</Button>
			</Card>
			)
	}
}

export default EventCard