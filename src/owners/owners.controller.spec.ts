import { Test, TestingModule } from '@nestjs/testing';
import { Types } from 'mongoose';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { CreateOwnerDto } from './create-owner.dto';

describe('OwnersController', () => {
  let ownersController: OwnersController;
  let ownersService: DeepMocked<OwnersService>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [OwnersController],
    })
      .useMocker(createMock)
      .compile();

    ownersController = moduleRef.get<OwnersController>(OwnersController);
    ownersService = moduleRef.get<OwnersService, DeepMocked<OwnersService>>(
      OwnersService,
    );
  });

  it('should be defined', () => {
    expect(ownersController).toBeDefined();
  });

  it('should be an instance of OwnersController', () => {
    expect(ownersController).toBeInstanceOf(OwnersController);
  });

  describe('findAll', () => {
    it('should be a method', () => {
      expect(ownersController.findAll).toEqual(expect.any(Function));
    });

    it('should invoke the findAll method of an instance of OwnersService', () => {
      ownersController.findAll();
      expect(ownersService.findAll).toHaveBeenCalled();
    });

    it('should return the result of invoking the findAll method of an instance of OwnersService', () => {
      expect(ownersService.findAll).toHaveReturnedWith(
        ownersController.findAll(),
      );
    });
  });

  describe('findById', () => {
    it('should be a method', () => {
      expect(ownersController.findById).toEqual(expect.any(Function));
    });

    it('should invoke the findById method of an instance of OwnersService with a string argument', () => {
      const id = new Types.ObjectId().toString();
      ownersController.findById(id);
      expect(ownersService.findById).toHaveBeenCalledWith(id);
    });

    it('should return the result of invoking the findById method of an instance of OwnersService with a string argument', () => {
      const id = new Types.ObjectId().toString();
      expect(ownersService.findById).toHaveReturnedWith(
        ownersController.findById(id),
      );
    });
  });

  describe('create', () => {
    it('should be a method', () => {
      expect(ownersController.create).toEqual(expect.any(Function));
    });

    it('should invoke the create method of an instance of OwnersService with a CreateOwnerDto argument', () => {
      const createOwnerDto = new CreateOwnerDto();
      ownersController.create(createOwnerDto);
      expect(ownersService.create).toHaveBeenCalledWith(createOwnerDto);
    });

    it('should return the result of invoking the create method of an instance of OwnersService with a CreateOwnerDto argument', () => {
      const createOwnerDto = new CreateOwnerDto();
      expect(ownersService.create).toHaveReturnedWith(
        ownersController.create(createOwnerDto),
      );
    });
  });

  describe('remove', () => {
    it('should be a method', () => {
      expect(ownersController.remove).toEqual(expect.any(Function));
    });

    it('should invoke the remove method of an instance of OwnersService with a string argument', () => {
      const id = new Types.ObjectId().toString();
      ownersController.remove(id);
      expect(ownersService.remove).toHaveBeenCalledWith(id);
    });

    it('should return the result of invoking the remove method of an instance of OwnersService with a string argument', () => {
      const id = new Types.ObjectId().toString();
      expect(ownersService.remove).toHaveReturnedWith(
        ownersController.remove(id),
      );
    });
  });
});
