import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type CreateNewAccountModalProps = {
  onSubmit: (amount: number) => void;
  accountName: string;
};

export default function CreateNewAccountModal({
  onSubmit,
  accountName,
}: CreateNewAccountModalProps) {
  const [startAmount, setStartAmount] = useState<string>("");

  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Account Detected</DialogTitle>
          <DialogDescription>
            A new account with name{" "}
            <span className="font-bold">{accountName} </span> detected please
            choose a starting ammount
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Starting amount
            </Label>
            <Input
              id="name"
              className="col-span-3"
              type="number"
              name="amount"
              onChange={(e) => setStartAmount(e.currentTarget.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => onSubmit(Number(startAmount))}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
