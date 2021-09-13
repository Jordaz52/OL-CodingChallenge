const assert = require('chai').assert;
const challenge = require('../process.js');

describe('Challenge', function(){
	it('3_3/4 - 5 should return -1_1/4', function(){
		let result = challenge.process("3_3/4 - 5");
		assert.equal(result, "-1_1/4");
	})
	
	it('2_3/8 + 9/8 should return 3_1/2', function(){
		let result = challenge.process("2_3/8 + 9/8");
		assert.equal(result, "3_1/2");
	})
	
	it('1/2           *           3_3/4 should return 1_7/8', function(){
		let result = challenge.process("1/2           *           3_3/4");
		assert.equal(result, "1_7/8");
	})
	
	it('1/3 - 1/6 should return 1/6', function(){
		let result = challenge.process("1/3 - 1/6");
		assert.equal(result, "1/6");
	})
	
	it('1/2 * 3_3/4 should return 1_7/8', function(){
		let result = challenge.process("1/2 * 3_3/4");
		assert.equal(result, "1_7/8");
	})
	
	it('1/2 / 3_3/4 should return 2/15', function(){
		let result = challenge.process("1/2 / 3_3/4");
		assert.equal(result, "2/15");
	})
	
	it('2_1/2 - 1/2 should return 2', function(){
		let result = challenge.process("2_1/2 - 1/2");
		assert.equal(result, "2");
	})
	
	it('2_1/2 - n should throw error', function(){
		try	{
			let result = challenge.process("2_1/2 - n");
		} catch (e) {
			assert.equal(e, 'Unable to do the operation given. Please verify.');
		}
	})
	


});