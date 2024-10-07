import { z } from "zod";

export const EmbedBuilderAuthor = z.object({
  name: z
    .string({
      message: `<EmbedBuilder>.setAuthor({ name: string }): Cannot contain more than 256 chars.`,
    })
    .max(256),
  icon: z
    .string({
      message: `<EmbedBuilder>.setAuthor({ icon: string }): Invalid URL.`,
    })
    .url()
    .optional(),
});
