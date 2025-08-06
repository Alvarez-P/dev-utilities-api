export class BaseEntity {
  constructor(
    public id: string,
    public createdAt: Date,
    public createdBy: string,
    public updatedAt: Date | null,
    public updatedBy: string | null,
    public deletedAt: Date | null,
    public deletedBy: string | null
  ) {}
}
