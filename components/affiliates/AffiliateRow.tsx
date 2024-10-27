"use client";

import { Building2, Globe } from "lucide-react";
import { IAffiliate } from "@/lib/types/affiliate";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface AffiliateRowProps {
  affiliate: IAffiliate;
  onClick?: () => void;
}

export function AffiliateRow({ affiliate, onClick }: AffiliateRowProps) {
  const campaignsCount = affiliate.campaigns?.length || 0;

  return (
    <div 
      className="flex items-center justify-between p-4 bg-card rounded-lg border hover:bg-accent/5 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-3 min-w-[240px]">
          <Avatar className="h-8 w-8 bg-secondary/20">
            <AvatarFallback>
              <Building2 className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <span className="font-medium">{affiliate.name}</span>
        </div>

        <Badge 
          variant={affiliate.status === "active" ? "success" : "destructive"}
          className="capitalize min-w-[80px] justify-center"
        >
          {affiliate.status}
        </Badge>

        <div className="flex items-center gap-2 min-w-[140px]">
          <Globe className={`w-4 h-4 ${campaignsCount > 0 ? "text-yellow-500" : "text-muted-foreground"}`} />
          <span className="text-muted-foreground">
            {campaignsCount} Campaigns
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm">Group:</span>
        <Badge variant="secondary" className="capitalize">
          {affiliate.group?.name}
        </Badge>
      </div>
    </div>
  );
}