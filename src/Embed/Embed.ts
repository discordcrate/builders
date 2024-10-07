import { APIEmbed } from 'discord-api-types/v10'

export class Embed {
    protected data: APIEmbed | undefined;

    constructor(embed?: APIEmbed) {
        this.data = embed;
    }

    public toJSON() {
        return this.data;
    }
}