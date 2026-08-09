export default function handler(req, res) {
  res.status(200).json({
    success: true,
    profile: {
      name: "Rishabh Patel",
      college: "ABES Engineering College, Ghaziabad",
      year: "B.Tech 2nd Year",
      track: "Full-Stack Development",
    },
  });
}