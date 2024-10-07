import { z } from "zod";
import { APIEmbed } from "discord-api-types/v10";
import { TEmbedBuilderAuthor } from "../types/EmbedBuilder";
import { EmbedBuilderAuthor } from "../types/zod/EmbedBuilder";

export class EmbedBuilder {
  protected data: APIEmbed;

  /**
   * Embed Builder.
   */
  public constructor() {
    this.data = {};
  }

  public setDescription(description: string) {
    z.string({
      message:
        "<EmbedBuilder>.setDescription(): Cannot contain more than 4095 chars.",
    })
      .max(4096)
      .parse(description);
    this.data.description = description;
    return this;
  }

  public setTitle(title: string) {
    z.string({
      message: "<EmbedBuilder>.setTitle(): Cannot contain more than 256 chars.",
    })
      .max(256)
      .parse(title);
    this.data.title = title;
    return this;
  }

  public setTimestamp(stamp?: string) {
    z.string({ message: `<EmbedBuilder>.setTimestamp(): Invalid date.` })
      .date()
      .parse(stamp);
    this.data.timestamp = stamp ? stamp : new Date(Date.now()).toISOString();
    return this;
  }

  public setThumbnail(image: string) {
    z.string({ message: `<EmbedBuilder>.setThumbnail(): Invalid URL.` })
      .url()
      .parse(image);
    this.data.thumbnail = { url: image };
    return this;
  }

  public setImage(image: string) {
    z.string({ message: "<EmbedBuilder>.setImage(): Invalid URL." })
      .url()
      .parse(image);
    this.data.image = { url: image };
    return this;
  }

  public setAuthor(author: TEmbedBuilderAuthor) {
    EmbedBuilderAuthor.parse(author);
    this.data.author = { name: author.name, icon_url: author.icon };
    return this;
  }
}
