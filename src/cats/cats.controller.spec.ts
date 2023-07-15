import { TestingModule, Test } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { Types } from 'mongoose';
import { CreateCatDto } from './create-cat.dto';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: DeepMocked<CatsService>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    })
      .useMocker(createMock)
      .compile();

    catsController = moduleRef.get<CatsController>(CatsController);
    catsService = moduleRef.get<CatsService, DeepMocked<CatsService>>(
      CatsService,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(catsController).toBeDefined();
  });

  it('should be an instance of CatsController', () => {
    expect(catsController).toBeInstanceOf(CatsController);
  });

  describe('findAll', () => {
    it('should be a method', () => {
      expect(catsController.findAll).toEqual(expect.any(Function));
    });

    it('should invoke the findAll method of an instance of CatsService', () => {
      catsController.findAll();
      expect(catsService.findAll).toHaveBeenCalled();
    });

    it('should return the result of invoking the findAll method of an instance of CatsService', () => {
      expect(catsService.findAll).toHaveReturnedWith(catsController.findAll());
    });
  });

  describe('findById', () => {
    it('should be a method', () => {
      expect(catsController.findById).toEqual(expect.any(Function));
    });

    it('should invoke the findById method of an instance of CatsService with a string argument', () => {
      const id = new Types.ObjectId().toString();
      catsController.findById(id);
      expect(catsService.findById).toHaveBeenCalledWith(id);
    });

    it('should return the result of invoking the findById method of an instance of CatsService with a string argument', () => {
      const id = new Types.ObjectId().toString();
      expect(catsService.findById).toHaveReturnedWith(
        catsController.findById(id),
      );
    });
  });

  describe('create', () => {
    it('should be a method', () => {
      expect(catsController.create).toEqual(expect.any(Function));
    });

    it('should invoke the create method of an instance of CatsService with a CreateCatDto argument', () => {
      const createCatDto = new CreateCatDto();
      catsController.create(createCatDto);
      expect(catsService.create).toHaveBeenCalledWith(createCatDto);
    });

    it('should return the result of invoking the create method of an instance of CatsService with a CreateCatDto argument', () => {
      const createCatDto = new CreateCatDto();
      expect(catsService.create).toHaveReturnedWith(
        catsController.create(createCatDto),
      );
    });
  });

  describe('remove', () => {
    it('should be a method', () => {
      expect(catsController.remove).toEqual(expect.any(Function));
    });

    it('should invoke the remove method of an instance of CatsService with a string argument', () => {
      const id = new Types.ObjectId().toString();
      catsController.remove(id);
      expect(catsService.remove).toHaveBeenCalledWith(id);
    });

    it('should return the result of invoking the remove method of an instance of CatsService with a string argument', () => {
      const id = new Types.ObjectId().toString();
      expect(catsService.remove).toHaveReturnedWith(catsController.remove(id));
    });
  });
});
