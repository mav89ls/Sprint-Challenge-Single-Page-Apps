import React from "react";
import { Card } from "semantic-ui-react";

export default function EpisodeCard(props) {
  return (
    <Card className="episode-card">
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>Episode number: {props.number}</Card.Description>
        <Card.Description>Air Date: {props.airDate}</Card.Description>
      </Card.Content>
    </Card>
  );
}
