/*function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
*/
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }

  return a / b;
}

const queue = guardrail(() => divide(10, 2));
console.log(queue); // [5, "Guardrail was processed"]

const queue2 = guardrail(() => divide(10, 0));
console.log(queue2); // ["Cannot divide by zero", "Guardrail was processed"]
