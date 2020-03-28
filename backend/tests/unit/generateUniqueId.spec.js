const generateUniqueId = require ('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should genetrate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});