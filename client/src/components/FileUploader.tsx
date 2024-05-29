"use client";
import { Input } from "./ui/input";
import ProcessingTransactionView from "./ProcessingTransactionView/ProcessingTransactionView";
import { useState } from "react";

export default function FileUploader() {
  const [text, setText] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const arrayBuffer = event.target.result as ArrayBuffer;
          const decoder = new TextDecoder("iso-8859-1");
          const text = decoder.decode(arrayBuffer);
          setText(text);
        }
      };
      reader.readAsArrayBuffer(selectedFile);
    }
  };

  return (
    <section className="w-full h-full flex flex-col gap-2">
      <div className="flex justify-center flex-col gap-2 items-center">
        <form>
          <Input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </form>
      </div>
      <ProcessingTransactionView text={text} />
    </section>
  );
}
