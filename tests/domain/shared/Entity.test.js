import Entity from "../../../src/domain/shared/Entity";

describe('Domain Entity tests', () => {
    describe('When nothing is passed', () => {
        test('it should create an valid entity', () => {
            const entity = new Entity();
            expect(entity.id).toBeTruthy();
            expect(entity.createdAt).toBeTruthy();
            expect(entity.updatedAt).toBeTruthy();
        });
    });
});