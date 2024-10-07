import { z } from "zod";
import { EmbedBuilderAuthor } from "./zod/EmbedBuilder";

export type TEmbedBuilderAuthor = z.infer<typeof EmbedBuilderAuthor>;
