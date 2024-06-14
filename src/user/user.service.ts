import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { identity } from 'rxjs';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}
  // Create
  async create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createUserDto,
    });
  }
  // Read All
  async findAll() {
    return this.databaseService.user.findMany();
  }
  // Read One
  async findOne(id: string) {
    return this.databaseService.user.findUnique({
      where: {
        id: id.toString(),
      },
    });
  }
  // Update One
  async update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id: id.toString(),
      },
      data: updateUserDto,
    });
  }
  // Delete
  remove(id: string) {
    return this.databaseService.user.delete({
      where: {
        id: id.toString(),
      },
    });
  }
}
