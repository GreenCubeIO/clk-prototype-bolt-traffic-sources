"use client";

import { Zap } from "lucide-react";
import { ITrafficSource } from "@/lib/types/traffic";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface TrafficSourceRowProps {
  source: ITrafficSource;
  onClick?: () => void;
}

export function TrafficSourceRow({ source, onClick }: TrafficSourceRowProps) {
  const eventsCount = source.events?.length || 0;

  return (
    <div 
      className="flex items-center justify-between p-4 bg-card rounded-lg border hover:bg-accent/5 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-3 min-w-[240px]">
          <Avatar className="h-8 w-8">
            <AvatarImage src={source.logo} alt={source.name} className="p-1" />
            <AvatarFallback>{source.name[0]}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{source.name}</span>
        </div>

        <Badge 
          variant={source.status === "active" ? "success" : "destructive"}
          className="capitalize min-w-[80px] justify-center"
        >
          {source.status}
        </Badge>

        <div className="flex items-center gap-2 min-w-[140px]">
          <Zap className={`w-4 h-4 ${eventsCount > 0 ? "text-yellow-500" : "text-muted-foreground"}`} />
          <span className="text-muted-foreground">
            {eventsCount} Native Events
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm">Short ID:</span>
        <Badge variant="secondary" className="font-mono">
          {source.shortname}
        </Badge>
      </div>
    </div>
  );
}