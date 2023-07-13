import { TestingModule, Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { Model } from 'mongoose';
import { CatsService } from './cats.service';
import { Cat } from './schemas/cat.schema';

describe('CatsService', () => {
  let catsService: CatsService;
  let catModel: DeepMocked<Model<Cat>>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        CatsService,
        {
          provide: getModelToken(Cat.name),
          useValue: createMock<Model<Cat>>(),
        },
      ],
    }).compile();

    catsService = moduleRef.get<CatsService>(CatsService);
    catModel = moduleRef.get<Model<Cat>, DeepMocked<Model<Cat>>>(
      getModelToken(Cat.name),
    );
  });
  // afterEach(() => {});
  it('should be defined', () => {
    expect(catsService).toBeDefined();
  });
  it('should be an instance of CatsService', () => {
    expect(catsService).toBeInstanceOf(CatsService);
  });

  describe('findAll', () => {
    it('should be a method', () => {
      expect(catsService.findAll).toEqual(expect.any(Function));
    });
  });

  describe('findOne', () => {
    it('should be a method', () => {
      expect(catsService.findOne).toEqual(expect.any(Function));
    });
  });

  describe('create', () => {
    it('should be a method', () => {
      expect(catsService.create).toEqual(expect.any(Function));
    });
  });

  describe('remove', () => {
    it('should be a method', () => {
      expect(catsService.remove).toEqual(expect.any(Function));
    });
  });
});
