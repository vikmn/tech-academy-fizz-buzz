import { fizzBuzz } from '../main/fizzBuzz'

describe('Fizz buzz scenario',() => {
  describe('given a 3',() => {
    const result = fizzBuzz(3)
    it('should return fizz', function () {
       expect( result).toEqual( 'fizz')
    });
  })
  describe('given a 5',() =>{ 
    const result = fizzBuzz(5)
    it('should return buzz', function () {
       expect( result).toEqual( 'buzz')
    });
  })
})
