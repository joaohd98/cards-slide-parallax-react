const inverseMapRange = (inMin: number, inMax: number, outMin: number, outMax: number, value: number) => {
  const ratio = (value - inMin) / (inMax - inMin);

  const res = outMin + (outMax - outMin) * (1 - ratio);
  const clampRes = Math.min(Math.max(res, outMin), outMax);

  return isNaN(res) ? 0 : clampRes;
}

export default inverseMapRange;