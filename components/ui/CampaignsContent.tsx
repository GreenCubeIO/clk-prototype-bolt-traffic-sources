"use client";

import { Card } from "@/components/ui/card";

export function CampaignsContent() {
  return (
    <div className="p-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Campaigns</h1>
        <p className="text-muted-foreground">
          Your campaigns dashboard will appear here.
        </p>
      </Card>
    </div>
  );
}