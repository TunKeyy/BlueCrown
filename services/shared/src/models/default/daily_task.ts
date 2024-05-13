import { BaseModel, BelongsTo, Column, ForeignKey, Table } from "backend-nexlab";
import { User } from "./user";

export enum TaskStatus {
  ToDo = "to_do",
  InProgress = "in_progress",
  Canceled = "canceled",
  Completed = "completed",
}

@Table({ tableName: "daily_tasks" })
export class DailyTask extends BaseModel<DailyTask> {
  @ForeignKey(() => User)
  @Column
  public readonly userId: string;
  @BelongsTo(() => User)
  public readonly user: User;

  @Column
  public readonly name: string;

  @Column
  public readonly description: string;

  @Column
  public readonly taskStatus: TaskStatus;

  @Column
  public readonly deadline: Date;

  @Column
  public readonly priority: string;
}
