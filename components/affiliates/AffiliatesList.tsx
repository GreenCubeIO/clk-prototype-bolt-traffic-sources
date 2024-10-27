"use client";

import { useState } from "react";
import { Search, Network, Plus, ArrowLeft } from "lucide-react";
import { mockAffiliates } from "@/lib/fixtures/affiliates";
import { AffiliateRow } from "./AffiliateRow";
import { AffiliateForm } from "@/components/AffiliateForm";
import { IAffiliate } from "@/lib/types/affiliate";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AffiliatesList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAffiliate, setSelectedAffiliate] = useState<IAffiliate | null>(null);
  
  const filteredAffiliates = mockAffiliates.filter(affiliate => 
    affiliate.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedAffiliate) {
    return (
      <div className="p-6">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6"
          onClick={() => setSelectedAffiliate(null)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Affiliates
        </Button>
        <AffiliateForm />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Network className="w-5 h-5 text-muted-foreground" />
            <h1 className="text-xl font-semibold">Affiliate Networks</h1>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Affiliate
          </Button>
        </div>

        <div className="relative w-[320px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            className="pl-9 h-10"
            placeholder="Search affiliates..."
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        {filteredAffiliates.map((affiliate) => (
          <AffiliateRow 
            key={affiliate._id} 
            affiliate={affiliate}
            onClick={() => setSelectedAffiliate(affiliate)}
          />
        ))}
      </div>
    </div>
  );
}