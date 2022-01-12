import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { CreateDto, UpdateDto } from './dto';

// GetOne
// GetMany
// Post (Create Or Update)
// Put/Patch (Replace/Update)
// Delete

@Controller('rest/todo')
export class TodoController {
  @Get()
  getAllAction(): string {
    return 'getAllAction';
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): string {
    return 'Get one by id=' + id;
  }

  @Post(':id')
  createAction(@Param('id') id: string, @Body() todo: CreateDto): CreateDto {
    console.log(todo);
    return todo;
  }

  @Put(':id')
  updateAction(@Param('id') id: string, @Body() todo: UpdateDto): UpdateDto {
    console.log(todo);
    return todo;
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): string {
    return 'deleteActionby id=' + id;
  }
}
