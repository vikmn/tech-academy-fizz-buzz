const romanNumeralFor = (number: number) => {
  if (number % 10 == 0){
    return 'X';
  }
  else if (number % 5 == 0){
    return 'V';
  }
  return 'I'
};

describe('Roman Numerals scenarios', function () {
  describe('Given a Number 1 ', function () {
    const result = romanNumeralFor(1);
    it('should return I', function () {
      expect(result).toEqual('I')
    });
  });
  describe('Given a Number 5 ', function () {
    const result = romanNumeralFor(5);
    it('should return V', function () {
      expect(result).toEqual('V')
    });
  });
  describe('Given a Number 10 ', function () {
    const result = romanNumeralFor(10);
    it('should return X', function () {
      expect(result).toEqual('X')
    });
  });
  
});
