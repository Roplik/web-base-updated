/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) 
{
  let res = 0;
  
  const min = Math.min(start, end);
  const max = Math.max(start,end);

  for(let i = min; i <= max; ++i)
  {
    if(i % 2 == 0)
    {
      res += i;
    }
  }

  return res;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) 
{
  let res = 0;
  let current = a;

  while(current > 0.1)
  {
    current /= 2;
    res++;
  }
  
  return res;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) 
{
  if (!message) return message;

  const chars = message.split('');
  let i = 2; 

  do 
  {
    if (i < chars.length) 
    {
      chars[i] = '_';
    }
    i += 3;
  } while (i < chars.length);

  return chars.join('');
}

