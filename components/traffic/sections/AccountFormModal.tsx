"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { Switch } from "@/components/ui/switch";

interface Account {
  _id: string;
  name: string;
  isTag: boolean;
}

interface AccountFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (account: Account) => void;
  account?: Account;
}

export function AccountFormModal({ isOpen, onClose, onSave, account }: AccountFormModalProps) {
  const [formData, setFormData] = useState<Account>(() => ({
    _id: account?._id || "",
    name: account?.name || "",
    isTag: account?.isTag ?? true,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {account ? "Edit Account" : "Add New Account"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <FloatingLabelInput
            label="Account Name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
          />

          <FloatingLabelInput
            label="Account ID"
            value={formData._id}
            onChange={(e) => setFormData(prev => ({ ...prev, _id: e.target.value }))}
            required
          />

          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium">Tag Account</span>
              <p className="text-sm text-muted-foreground">Mark this account as a tag account</p>
            </div>
            <Switch
              checked={formData.isTag}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isTag: checked }))}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {account ? "Save Changes" : "Add Account"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}