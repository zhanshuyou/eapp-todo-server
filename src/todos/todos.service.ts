import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { CreateTodoDto, UpdateTodoDto } from './dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findById(id).exec();
  }

  async updateOne(id: string, body: UpdateTodoDto): Promise<Todo> {
    return this.todoModel.updateOne({ _id: id }, body);
  }

  async removeOne(id: string): Promise<any> {
    return this.todoModel.deleteOne({ _id: id }).exec();
  }
}
