"use client";

import { Target, DollarSign } from "lucide-react";
import { IOffer } from "@/lib/types/offer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface OfferRowProps {
  offer: IOffer;
  onClick?: () => void;
}

export function OfferRow({ offer, onClick }: OfferRowProps) {
  return (
    <div 
      className="flex items-center justify-between p-4 bg-card rounded-lg border hover:bg-accent/5 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-3 min-w-[240px]">
          <Avatar className="h-8 w-8 bg-secondary/20">
            <AvatarFallback>
              <Target className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <span className="font-medium">{offer.name}</span>
        </div>

        <Badge 
          variant={offer.status === "active" ? "success" : "destructive"}
          className="capitalize min-w-[80px] justify-center"
        >
          {offer.status}
        </Badge>

        <div className="flex items-center gap-2 min-w-[140px]">
          <DollarSign className="w-4 h-4 text-green-500" />
          <span className="text-muted-foreground">
            ${offer.payout} Payout
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm">Category:</span>
        <Badge variant="secondary" className="capitalize">
          {offer.category.name}
        </Badge>
      </div>
    </div>
  );
}