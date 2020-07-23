const { succeed, fail, repair } = require('./enhancer.js');

// item we will put through each test
const item = {
    name: 'item',
    durability: 60,
    enhancement: 17,
}

// expected results
const itemSuccess = {
    name: 'item',
    durability: 60,
    enhancement: 18,
}
const itemFail = {
    name: 'item',
    durability: 50,
    enhancement: 16
}
const itemRepair = {
    name: 'item',
    durability: 100,
    enhancement: 17
}



//tests!
describe('enhancerTests', () => {
    // success
    describe('success', () => {
        it('should accept item object and return new item based on rules', () => {
            const newItem = succeed(item);
            expect(newItem).toStrictEqual(itemSuccess);
        })
    })
    // fail
    describe('fail', () => {
        it('should accept item object and return new item based on rules', () => {
            const newItem = fail(item);
            expect(newItem).toStrictEqual(itemFail);
        })
    })
    // repair
    describe('repair', () => {
        it('should accept item object and return new item based on rules', () => {
            const newItem = repair(item);
            expect(newItem).toStrictEqual(itemRepair);
        })
    })

})