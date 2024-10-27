"use client";

import { Avatar, Chip } from "@nextui-org/react";
import { Zap } from "lucide-react";
import { ITrafficSource } from "@/lib/types/traffic";

interface TrafficSourceRowProps {
  source: ITrafficSource;
}

export function TrafficSourceRow({ source }: TrafficSourceRowProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-default-200 hover:bg-default-50 cursor-pointer">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-3 w-[200px]">
          <Avatar
            src={source.logo}
            size="sm"
            classNames={{
              base: "bg-default-100",
              img: "object-contain p-1"
            }}
          />
          <span className="font-medium">{source.name}</span>
        </div>

        <Chip
          className="capitalize min-w-[80px] justify-center"
          color={source.status === "active" ? "success" : "danger"}
          size="sm"
          variant="flat"
          radius="sm"
        >
          {source.status}
        </Chip>

        <div className="flex items-center gap-2 w-[150px]">
          <Zap 
            className={`w-4 h-4 ${source.events.length > 0 ? "text-yellow-500" : "text-gray-400"}`} 
          />
          <span className="text-default-600">
            {source.events.length} Native Events
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-default-500 text-sm">Short ID:</span>
        <Chip
          className="font-mono bg-blue-100 text-blue-500"
          size="sm"
          variant="flat"
          radius="sm"
        >
          {source.shortname}
        </Chip>
      </div>
    </div>
  );
}