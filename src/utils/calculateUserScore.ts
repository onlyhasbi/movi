export const calculateUserScore = (meanRating: number, numberOfVote: number) => {
  const MeanVote = 9;
  const MinimumVote = 25000;

  const result = (meanRating * numberOfVote + MeanVote * MinimumVote) / (numberOfVote + 25000);
  return parseFloat(result.toFixed(1)) * 10;
};
