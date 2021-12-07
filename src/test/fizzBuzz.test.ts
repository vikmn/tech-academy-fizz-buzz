function fizzBuzz(number: number) {
 return 'fizz';
}

describe('Fizz buzz scenario',()=>{
  describe('given a fizz',() =>{
    const result = fizzBuzz(1)
    it('should  return fizz', function () {
       expect( result).toEqual( 'fizz')
    });
  })
})
