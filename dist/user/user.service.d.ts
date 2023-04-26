import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        password: any;
        id: number;
        name: string;
        email: string;
        balance: number;
        isActive: boolean;
    }>;
    findAll(): Promise<import(".prisma/client").User[]>;
    findOne(id: number): Promise<import(".prisma/client").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        password: any;
        id: number;
        name: string;
        email: string;
        balance: number;
        isActive: boolean;
    }>;
    remove(id: number): Promise<import(".prisma/client").User>;
}
