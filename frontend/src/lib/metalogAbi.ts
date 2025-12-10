export const metaLogAbi = [
  {
    type: "function",
    name: "getQuantile",
    stateMutability: "view",
    inputs: [
      { name: "forProbability", type: "int256" },
      { name: "aCoeffs", type: "int256[]" },
      { name: "boundedness", type: "string" },
      { name: "lowerBound", type: "int256" },
      { name: "upperBound", type: "int256" },
    ],
    outputs: [{ name: "answer", type: "int256" }],
  },
  {
    type: "function",
    name: "getHdrRandom",
    stateMutability: "view",
    inputs: [
      { name: "entityId", type: "int256" },
      { name: "varId", type: "int256" },
      { name: "option1", type: "int256" },
      { name: "option2", type: "int256" },
      { name: "pmIndex", type: "int256" },
    ],
    outputs: [{ name: "randi", type: "int256" }],
  },
  {
    type: "function",
    name: "solveProbabilityNewton",
    stateMutability: "view",
    inputs: [
      { name: "targetQuantile", type: "int256" },
      { name: "aCoeffs", type: "int256[]" },
      { name: "boundedness", type: "string" },
      { name: "lowerBound", type: "int256" },
      { name: "upperBound", type: "int256" },
      { name: "initialGuess", type: "int256" },
      { name: "tolerance", type: "int256" },
      { name: "maxIterations", type: "uint256" },
    ],
    outputs: [{ name: "probability", type: "int256" }],
  },
] as const;
