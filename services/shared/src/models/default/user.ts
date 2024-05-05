import { BaseModel, Column, Table } from "backend-nexlab";

@Table({ tableName: 'users'})
export class User extends BaseModel<User> {
    @Column
    public readonly name: string;

    @Column
    public readonly email: string;

    @Column
    public readonly firebaseId: string;

    @Column
    public readonly avatar: string;

    @Column
    public readonly phoneNumber: string;

    @Column
    public readonly isMuted: string;
}