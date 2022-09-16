export function sum(...args) {
  if (args.length === 0) {
    throw Error('функции sum требуется как минимум 1 аргумент');
  }

  return args.reduce((result, current) => result + current, 0);
}
