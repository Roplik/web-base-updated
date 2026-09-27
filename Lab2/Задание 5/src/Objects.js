/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) 
{
  if (data.gender === 'female') 
  {
    delete data.age;
  } 
  else if (data.gender === 'male') 
  {
    if (!('income' in data)) 
    {
      data.income = 100000;
    }
  }
  return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) 
{
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys3 = Object.keys(obj3);

  const allKeys = keys1.concat(keys2, keys3);

  const uniqueKeys = Array.from(new Set(allKeys));

  uniqueKeys.sort();

  return uniqueKeys;
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) 
{
  const result = [];

  for (let i = 0; i < count; i++) 
  {
    const clone = structuredClone(obj);
    clone.id = i;
    result.push(clone);
  }

  return result;
}
