import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Req
} from "@nestjs/common";
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  create(@Body() createNewsDto: CreateNewsDto, @Req() request) {
    let createNewsData = {...createNewsDto, lang: request.cookies['lang']}
    return this.newsService.create(createNewsData);
  }

  @Get()
  findAll(@Req() request) {
    let language = request.cookies['lang']
    return this.newsService.findAllByLanguage(language);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() request) {
    return this.newsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Req() request, @Body() updateNewsDto: UpdateNewsDto) {
    const updateData = {...updateNewsDto, lang: request.cookies['lang']}
    return this.newsService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() request) {
    return this.newsService.remove(id);
  }
}
