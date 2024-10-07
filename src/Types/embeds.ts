import { z } from 'zod';
import messages from '../Errors/messages';

export const EmbedAuthorField = z.object({ 
    name: z.string()
    .max(256, messages.author_field_NAME_max_char), 

    iconURL: z.string()
    .url(messages.author_field_ICONURL_invalid_url)
    .optional()
});

export type EmbedAuthor = z.infer<typeof EmbedAuthorField>

export const EmbedFooterField = z.object({
    text: z.string().max(2048, messages.footer_field_TEXT_max_char),
    iconURL: z.string()
    .url(messages.footer_field_ICONURL_invalid_url)
    .optional()
});

export type EmbedFooter = z.infer<typeof EmbedFooterField>

export const ColorList = {
    Red: 0x010191,
    Black: 0x0000
}

export const EmbedColorField = z.enum(["Red", "Black"]);
export type Colors = z.infer<typeof EmbedColorField>