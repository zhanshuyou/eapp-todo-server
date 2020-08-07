import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto, ListAllEntities } from './dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateTodoDto) {
    return this.todosService.updateOne(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.removeOne(id);
  }
}
