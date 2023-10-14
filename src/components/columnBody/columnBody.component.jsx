import React from "react";

import { TicketCard } from "../ticketCard/ticketCard.component";

export function ColumnBody({ groupBy, tickets }) {
  return (
    <div className="column-body-container">
      {tickets.map((ticket) => {
        return <TicketCard {...ticket} groupBy={groupBy} />;
      })}
    </div>
  );
}
