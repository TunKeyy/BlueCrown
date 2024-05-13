import { BaseModel, BelongsTo, Column, ForeignKey, Table } from "backend-nexlab";
import { User } from "./user";

@Table({ tableName: "notes" })
export class Note extends BaseModel<Note> {
  @ForeignKey(() => User)
  @Column
  public readonly userId: string;
  @BelongsTo(() => User)
  public readonly user: User;

  @Column
  public readonly title: string;

  @Column
  public readonly content: string;
}
