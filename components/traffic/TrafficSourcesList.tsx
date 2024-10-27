"use client";

import { useState } from "react";
import { Search, Zap, Plus } from "lucide-react";
import { mockTrafficSources } from "@/lib/fixtures/traffic-sources";
import { TrafficSourceRow } from "./TrafficSourceRow";
import { TrafficSourceForm } from "./TrafficSourceForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ITrafficSource } from "@/lib/types/traffic";

export function TrafficSourcesList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSource, setSelectedSource] = useState<ITrafficSource | null>(null);
  
  const filteredSources = mockTrafficSources.filter(source => 
    source.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedSource) {
    return (
      <TrafficSourceForm 
        initialData={selectedSource} 
        onCancel={() => setSelectedSource(null)} 
      />
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-muted-foreground" />
            <h1 className="text-xl font-semibold">Traffic Sources</h1>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Traffic Source
          </Button>
        </div>

        <div className="relative w-[320px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            className="pl-9 h-10"
            placeholder="Search traffic sources..."
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        {filteredSources.map((source) => (
          <TrafficSourceRow 
            key={source._id} 
            source={source}
            onClick={() => setSelectedSource(source)}
          />
        ))}
      </div>
    </div>
  );
}