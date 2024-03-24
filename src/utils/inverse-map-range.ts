const inverseMapRange = (inMin: number, inMax: number, outMin: number, outMax: number, value: number) => {
  const ratio = (value - inMin) / (inMax - inMin);

  const res = outMin + (outMax - outMin) * (1 - ratio);

  return isNaN(res) ? 0 : res;
}

export default inverseMapRange;