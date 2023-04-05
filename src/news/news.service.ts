import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectModel } from '@nestjs/mongoose';
import { News, NewsDocument } from './schemas/NewsSchema';
import { Model } from 'mongoose';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name) private readonly newsModel: Model<NewsDocument>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<NewsDocument> {
    const news = new this.newsModel(createNewsDto);
    return news.save();
  }

  async findAll(language: string): Promise<NewsDocument[]> {
    return this.newsModel.find();
  }

  async findAllByLanguage(language: string): Promise<NewsDocument[]> {
    return this.newsModel.find({lang: language});
  }

  async findOne(id: string): Promise<NewsDocument> {
    return this.newsModel.findById(id);
  }

  async update(
    id: string,
    updateNewsDto: UpdateNewsDto,
  ): Promise<NewsDocument> {
    return this.newsModel.findByIdAndUpdate(id, updateNewsDto);
  }

  async remove(id: string): Promise<NewsDocument> {
    return this.newsModel.findByIdAndRemove(id);
  }
}
