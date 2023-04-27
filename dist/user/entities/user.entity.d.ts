import { Transaction } from '@prisma/client';
export declare class User {
    id?: number;
    name?: string;
    email: string;
    password: string;
    isActive: boolean;
    transactions?: Transaction[];
}
