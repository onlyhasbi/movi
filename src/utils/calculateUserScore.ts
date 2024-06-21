export const calculateUserScore = (
  meanRating: number,
  numberOfVote: number
) => {
  const MEAN_VOTE = 9;
  const MINIMUM_VOTE = 25000;

  const result =
    (meanRating * numberOfVote + MEAN_VOTE * MINIMUM_VOTE) /
    (numberOfVote + 25000);
  return parseFloat(result.toFixed(1)) * 10;
};
