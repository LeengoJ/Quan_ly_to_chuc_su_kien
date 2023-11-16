export class CreateRole {
    name!: string;
    description!: string;
    isActive!: boolean;
    permissions!: string[];
    createdBy!: {
        _id: string,
        email: string
    }
    updatedBy!: {
        _id: string,
        email: string
    }
    deletedBy!: {
        _id: string,
        email: string
    }
    createAt!: Date;
    uploadAt!: Date;
    deletedAt!: Date;
    isDeleted!: boolean;
}