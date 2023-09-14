import { useEffect, useState } from "react";

import { api } from "@/lib/axios";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Prompt = {
  id: string;
  title: string;
  template: string;
};

export function PromptSelect() {
  const [prompts, setPrompts] = useState<Prompt[] | null>(null);

  useEffect(() => {
    api.get("/prompts").then((response) => setPrompts(response.data));
  }, []);

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..." />
      </SelectTrigger>
      <SelectContent>
        {prompts?.map((prompt) => (
          <SelectItem key={prompt.id} value={prompt.id}>
            {prompt.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
