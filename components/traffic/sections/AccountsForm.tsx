"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { ITrafficSource } from "@/lib/types/traffic";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Plus, Pencil } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { AccountFormModal } from "./AccountFormModal";
import { Badge } from "@/components/ui/badge";

interface Account {
  _id: string;
  name: string;
  isTag: boolean;
}

export function AccountsForm() {
  const { control } = useFormContext<ITrafficSource>();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "accounts"
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState<{ index: number; account: Account } | null>(null);

  const handleOpenModal = (index?: number, account?: Account) => {
    if (index !== undefined && account) {
      setEditingAccount({ index, account });
    } else {
      setEditingAccount(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingAccount(null);
  };

  const handleSaveAccount = (account: Account) => {
    if (editingAccount) {
      update(editingAccount.index, account);
    } else {
      append(account);
    }
    handleCloseModal();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Accounts Configuration</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => handleOpenModal()}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Account
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {fields.map((field, index) => (
          <Card 
            key={field.id} 
            className="p-4 hover:bg-accent/5 transition-colors cursor-pointer"
            onClick={() => handleOpenModal(index, field as Account)}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium truncate">{field.name}</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                >
                  <Pencil className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {field._id}
                </Badge>
                {field.isTag && (
                  <Badge variant="secondary" className="text-xs">
                    Tag Account
                  </Badge>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {fields.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No accounts configured. Click "Add Account" to create one.
        </div>
      )}

      <AccountFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveAccount}
        account={editingAccount?.account}
      />
    </div>
  );
}