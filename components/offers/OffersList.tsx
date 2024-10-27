"use client";

import { useState } from "react";
import { Search, Target, Plus, ArrowLeft } from "lucide-react";
import { OfferFixture } from "@/lib/fixtures/offers";
import { OfferRow } from "./OfferRow";
import { OfferForm } from "./OfferForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IOffer } from "@/lib/types/offer";

export function OffersList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOffer, setSelectedOffer] = useState<IOffer | null>(null);
  
  const offers = [OfferFixture];
  const filteredOffers = offers.filter(offer => 
    offer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedOffer) {
    return (
      <div className="p-6">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6"
          onClick={() => setSelectedOffer(null)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Offers
        </Button>
        <OfferForm 
          initialData={selectedOffer} 
          onCancel={() => setSelectedOffer(null)} 
        />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-muted-foreground" />
            <h1 className="text-xl font-semibold">Offers</h1>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Offer
          </Button>
        </div>

        <div className="relative w-[320px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            className="pl-9 h-10"
            placeholder="Search offers..."
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        {filteredOffers.map((offer) => (
          <OfferRow 
            key={offer._id} 
            offer={offer}
            onClick={() => setSelectedOffer(offer)}
          />
        ))}
      </div>
    </div>
  );
}