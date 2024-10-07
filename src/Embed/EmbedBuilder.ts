import { APIEmbed } from "discord-api-types/v10";
import { Embed } from "./Embed";
import { ColorList, Colors, EmbedAuthor, EmbedAuthorField, EmbedColorField, EmbedFooter, EmbedFooterField } from "../Types/embeds";
import { z } from "zod";

export class EmbedBuilder extends Embed {
    protected override data: APIEmbed | undefined;

    public constructor() {
        super();
    }

    public setAuthor(input: EmbedAuthor) {
        EmbedAuthorField.parse(input);

        this.data ??= {}
        this.data.author = {
            name: input.name,
            icon_url: input.iconURL
        }

        return this;
    }
    
    public setTitle(title: string) {
        z.string().max(256).parse(title);

        this.data ??= {};
        this.data.title = title;

        return this;
    }

    public setDescription(description: string) {
        z.string().max(4096).parse(description);

        this.data ??= {}
        this.data.description = description;

        return this;
    }

    public setImage(url: string) {
        z.string().url().parse(url);

        this.data ??= {}
        this.data.image = { url }

        return this;
    }

    public setFooter(input: EmbedFooter) {
        EmbedFooterField.parse(input);

        this.data ??= {}
        this.data.footer = {
            text: input.text,
            icon_url: input.iconURL
        }

        return this;
    }

    public setThumbnail(url: string) {
        z.string().url().parse(url);

        this.data ??= {}
        this.data.thumbnail = { url };
    }

    public setTimestamp(input?: string) {
        z.string().date().optional().parse(input);

        this.data ??= {}
        this.data.timestamp = input ? input : new Date(Date.now()).toISOString();

        return this;
    }
    
    public setColor(color: Colors) {
        EmbedColorField.parse(color);

        this.data ??= {}
        this.data.color = ColorList[color];

        return this;
    }
}