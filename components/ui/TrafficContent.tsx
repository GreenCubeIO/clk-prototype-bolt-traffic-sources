"use client";

import { useState } from "react";
import { Input, Button, Link } from "@nextui-org/react";
import { Search, Zap } from "lucide-react";
import { mockTrafficSources } from "@/lib/types/traffic";
import { TrafficSourceRow } from "./TrafficSourceRow";

export function TrafficContent() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredSources = mockTrafficSources.filter(source => 
    source.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6" />
          <h1 className="text-xl font-semibold">Traffic Sources</h1>
          <Button
            as={Link}
            href="#"
            variant="light"
            className="text-blue-500 font-normal"
            size="sm"
          >
            + Add Traffic Source
          </Button>
        </div>

        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          startContent={<Search className="w-4 h-4 text-default-400" />}
          classNames={{
            base: "max-w-xs",
            inputWrapper: "h-10 bg-default-100",
          }}
          size="sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        {filteredSources.map((source) => (
          <TrafficSourceRow key={source._id} source={source} />
        ))}
      </div>
    </div>
  );
}