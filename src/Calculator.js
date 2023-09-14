import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };
  const buttonValues = ['(' , ')' , '%' , 'AC' , '7', '8', '9' , '/' , '4', '5', '6', '*' , '1', '2', '3', '-', '0', '.', '=', '+'];

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        {buttonValues.map((value) => (
          <Button key={value} value={value} onClick={() => handleClick(value)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

// import React, { useState } from 'react';
// import Display from './Display';
// import Button from './Button';
// import math from 'mathjs'; // Import the mathjs library

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleClick = (value) => {
//     if (value === '=') {
//       try {
//         const evaluatedResult = math.evaluate(input);
//         setResult(evaluatedResult.toString());
//       } catch (error) {
//         setResult('Error');
//       }
//     } else if (value === 'C') {
//       setInput('');
//       setResult('');
//     } else {
//       setInput(input + value);
//     }
//   };

//   const buttonValues = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

//   return (
//     <div className="calculator">
//       <Display input={input} result={result} />
//       <div className="buttons">
//         {buttonValues.map((value) => (
//           <Button key={value} value={value} onClick={() => handleClick(value)} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calculator;
