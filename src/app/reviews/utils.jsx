export const getRatingColour = (num) => {
  if (num == null)
    return {
      color: "bg-ucalgaryLightGrey",
      averageRating: "-",
      commitment: "-",
    };
  if (num < 50)
    return {
      color: "bg-ucalgaryRed",
      averageRating: "Stale",
      commitment: "Demanding",
    };
  if (num < 80)
    return {
      color: "bg-ucalgaryGold",
      averageRating: "Middling",
      commitment: "Reasonable",
    };
  if (num <= 100)
    return {
      color: "bg-green-600",
      averageRating: "Great",
      commitment: "Minimal",
    };

  return { color: "bg-ucalgaryLightGrey", averageRating: "-", commitment: "-" };
};
