import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard(props) {
  return (
    <Card
      className="location-card"
      header={props.name}
      meta={props.type}
      description={props.dimension}
    />
  );
}
