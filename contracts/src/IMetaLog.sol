// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.4;

interface IMetaLog {
    function getQuantile(
        int256 forProbability,
        int256[] memory aCoeffs,
        string memory boundedness,
        int256 lowerBound,
        int256 upperBound
    ) external view returns (int256);

    function getHdrRandom(
        int256 entityId,
        int256 varId,
        int256 option1,
        int256 option2,
        int256 pmIndex
    ) external view returns (int256);

    function solveProbabilityNewton(
        int256 targetQuantile,
        int256[] memory aCoeffs,
        string memory boundedness,
        int256 lowerBound,
        int256 upperBound,
        int256 initialGuess,
        int256 tolerance,
        uint256 maxIterations
    ) external view returns (int256);
}
