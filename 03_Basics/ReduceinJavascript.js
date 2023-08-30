const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;   //wgen intialvalue is not specified
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);

   //           acc.    currentvalue   index          return value
///First call	15   	16	            1	             31
//Second call   31	    17	            2	             48
//Third call	48	    18	            3	             66
//Fourth call	66	    19	            4	             85   




//reduce if intialvalue is specified 

[15, 16, 17, 18, 19].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    10,
  );
  

/*
                                    acc.   curval. index     return value
First call	                          10	15	    0	      25
Second call	                          25	16	    1	      41
Third call	                          41	17	    2	      58
Fourth call	                          58	18	    3	      76
Fifth call	                          76	19	    4	      95


















*/