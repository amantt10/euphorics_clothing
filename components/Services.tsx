"use client";

import React from "react";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 w-full max-w-5xl mx-auto">
      <ServiceCard
        title="Make things float in air"
        description="Hover over this card to unleash the power of CSS perspective"
        imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        linkUrl="https://twitter.com/mannupaaji"
        linkText="Try now →"
        buttonText="Sign up"
      />
      {/* Example of another card reuse: */}
      <ServiceCard
        title="Another Service"
        description="This is another service card using the reusable component."
        imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        linkUrl="https://example.com"
        linkText="Learn more"
        buttonText="Get started"
      />
    </div>
  );
}
