import {useState} from 'react';
import './style.css';


function ReactCalc(){

    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');
    const ops = ['/','*','+','-','.','%','^'];

    const updateCalc = value => {
        if(
          ops.includes(value) && calc ==='' ||
          ops.includes(value) && ops.includes(calc.slice(-1))
        ){return;}

        if (value==='²') {
            CE();
            setResult(eval(Math.pow(calc, 2)).toString());
            setCalc(eval(Math.pow(calc, 2)).toString());
            return;
            };

        if (value==='³') {
            CE();
            setResult(eval(Math.pow(calc, 3)).toString());
            setCalc(eval(Math.pow(calc, 3)).toString());
            return;
        };

        if (value==='!') {
            CE();
            setResult(factorial(calc).toString());
            setCalc(factorial(calc).toString());
            return;
        };
    
        if (value==='∛') {
            CE();
            setResult(eval(Math.pow(calc, 1/3).toFixed(5)).toString());
            setCalc(eval(Math.pow(calc, 1/3).toFixed(5)).toString());
            return;
            };
        
        if (value==='√') {
            CE();
            setResult(eval(Math.sqrt(calc).toFixed(5)).toString());
            setCalc(eval(Math.sqrt(calc).toFixed(5)).toString());
            return;
            };

        setCalc(calc + value);
        if(!ops.includes(value)) {
            if (calc.includes('^')){
                let base = calc.slice(0, calc.indexOf("^"));
                setResult(eval(Math.pow(base, value)).toString());
                setCalc(eval(Math.pow(base, value)).toString());
                return;
            }
           
            if(calc.includes('Math')){
                setResult(eval(calc + value).toFixed(5).toString())
            }
            else {setResult(eval(calc + value).toString())};
           
        }
    }

    const calculate= () =>{

        setCalc(eval(calc).toString());
    }

    const CE= () =>{
        if(calc==='') {return};
        const value = calc.slice(0,-1);
        setCalc(value);
    }

    const AC= () => {
        if(calc==='') {return};
        setResult('0');
        setCalc('');
    }

    const factorial = n => {
        if (n === 0) return 1;
        let f = 1;
        for (let i = 1; i < n; i++) {
          f = f * (i + 1);
        }
        return f;
      };

    return(
        <div className="body">
            <div className="container">
                <div className="display">
                    {result ? <span>({result})</span> :''}
                    {calc || '0'}
                </div>
                <div className="btns">
                    {/* ROW 1 */}
                    <button onClick={() => updateCalc('(')}             className='btn'>(</button>
                    <button onClick={() => updateCalc(')')}             className='btn'>)</button>
                    <button onClick={() => updateCalc('!')}             className='btn'>X!</button>
                    <button onClick={() => updateCalc('²')}             className='btn'>x²</button>
                    <button onClick={() => updateCalc('√')}             className='btn'>√</button>
                    <button onClick={() => updateCalc('n')}             className='btn'>n√</button>
                    {/* ROW 2 */}
                    <button onClick={() => updateCalc('Math.sin(')}     className='btn'>sin</button>
                    <button onClick={() => updateCalc('Math.cos(')}     className='btn'>cos</button>
                    <button onClick={() => updateCalc('Math.tan(')}     className='btn'>tg</button>
                    <button onClick={() => updateCalc('³')}             className='btn'>x³</button>
                    <button onClick={() => updateCalc('∛')}             className='btn'>∛</button>
                    <button onClick={() => updateCalc('^')}             className='btn'>xⁿ</button>
                    {/* ROW 3 */}
                    <button onClick={() => updateCalc('1')}             className='btn'>1</button>
                    <button onClick={() => updateCalc('2')}             className='btn'>2</button>
                    <button onClick={() => updateCalc('3')}             className='btn'>3</button>
                    <button onClick={() => updateCalc('/')}             className='btn'>/</button>
                    <button onClick={() => updateCalc('/100')}          className='btn'>%</button>
                    <button onClick={() => updateCalc('Math.log(')}     className='btn'>ln</button>
                    {/* ROW 4 */}
                    <button onClick={() => updateCalc('4')}             className='btn'>4</button>
                    <button onClick={() => updateCalc('5')}             className='btn'>5</button>
                    <button onClick={() => updateCalc('6')}             className='btn'>6</button>
                    <button onClick={() => updateCalc('*')}             className='btn'>*</button>
                    <button onClick={() => updateCalc('Math.log10(')}   className='btn'>log</button>
                    <button onClick={() => updateCalc('Math.E')}        className='btn'>e</button>
                    {/* ROW 5 */}
                    <button onClick={() => updateCalc('7')}             className='btn'>7</button>
                    <button onClick={() => updateCalc('8')}             className='btn'>8</button>
                    <button onClick={() => updateCalc('9')}             className='btn'>9</button>
                    <button onClick={() => updateCalc('-')}             className='btn'>-</button>
                    <button id="AC" onClick={() => AC()}                className='btn'>AC</button>
                    <button id="CE" onClick={() => CE()}                className='btn'>CE</button>
                    {/* ROW 6 */}
                    <button onClick={() => updateCalc('.')}             className='btn'>.</button>
                    <button onClick={() => updateCalc('0')}             className='btn'>0</button>
                    <button onClick={() => updateCalc('Math.PI')}       className='btn'>π</button>
                    <button onClick={() => updateCalc('+')}             className='btn'>+</button>
                    <button id="eval" onClick={() => calculate()}       className="btn equal">=</button>
                </div>
                <div> by Lea Giardili</div>
            </div>
        </div>
    )
}

export default ReactCalc;