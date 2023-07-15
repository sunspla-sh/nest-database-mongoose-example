import { TestingModule, Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { Model, Types } from 'mongoose';
import { OwnersService } from './owners.service';
import { Owner } from './schemas/owner.schema';

describe('OwnersService', () => {
  let ownersService: OwnersService;
  let ownerModel: DeepMocked<Model<Owner>>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        OwnersService,
        {
          provide: getModelToken(Owner.name),
          useValue: createMock<Model<Owner>>(),
        },
      ],
    }).compile();

    ownersService = moduleRef.get<OwnersService>(OwnersService);
    ownerModel = moduleRef.get<Model<Owner>, DeepMocked<Model<Owner>>>(
      getModelToken(Owner.name),
    );
  });

  it('should be defined', () => {
    expect(ownersService).toBeDefined();
  });

  it('should be instance of OwnersService', () => {
    expect(ownersService).toBeInstanceOf(OwnersService);
  });

  describe('findAll', () => {
    it('should be a method', () => {
      expect(ownersService.findAll).toEqual(expect.any(Function));
    });

    it('should invoke the static find method of owner model', () => {
      ownersService.findAll();
      expect(ownerModel.find).toHaveBeenCalled();
    });

    it('should invoke the exec method of the query returned by calling the static find method of owner model', () => {
      ownersService.findAll();
      expect(ownerModel.find().exec).toHaveBeenCalled();
    });

    it('should return the result of invoking the exec method of the query returned by calling the static find method of owner model', () => {
      expect(ownerModel.find().exec).toHaveReturnedWith(
        ownersService.findAll(),
      );
    });
  });

  describe('findById', () => {
    it('should be a method', () => {
      expect(ownersService.findById).toEqual(expect.any(Function));
    });

    it('should invoke the static findById method of owner model', () => {
      const id = new Types.ObjectId().toString();
      ownersService.findById(id);
      expect(ownerModel.findById).toHaveBeenCalled();
    });

    it('should invoke the exec method of the query returned by calling the static findById method of owner model', () => {
      const id = new Types.ObjectId().toString();
      ownersService.findById(id);
      expect(ownerModel.findById(id).exec).toHaveBeenCalled();
    });

    it('should return the result of invoking exec method of the the query returned by calling the static findById method of owner model', () => {
      const id = new Types.ObjectId().toString();
      expect(ownerModel.findById(id).exec).toHaveReturnedWith(
        ownersService.findById(id),
      );
    });
  });

  describe('create', () => {
    it('should be a method', () => {
      expect(ownersService.create).toEqual(expect.any(Function));
    });
  });

  describe('remove', () => {
    it('should be a method', () => {
      expect(ownersService.remove).toEqual(expect.any(Function));
    });
  });
});
