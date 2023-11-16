export class CreatePermission {
    name!: string;
    apiPath!: string;
    method!: string;
    module!: string;
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