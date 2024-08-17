export const getRatingColour = (num) => {
  if (num == null) return { color: "bg-ucalgaryLightGrey", averageRating: "-" };
  if (num < 50) return { color: "bg-ucalgaryRed", averageRating: "Stale" };
  if (num < 80) return { color: "bg-ucalgaryGold", averageRating: "Middling" };
  if (num <= 100) return { color: "bg-green-600", averageRating: "Great" };

  return { color: "bg-ucalgaryLightGrey", averageRating: "???" };
};
