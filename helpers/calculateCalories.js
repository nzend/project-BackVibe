const calculateCalories = (data) => {
  const {
    desiredWeight = 35,
    height = 150,
    birthday = new Date(),
    sex = "male",
    levelActivity = 1,
  } = data;
  const lifestyleFactor = { 1: 1.2, 2: 1.375, 3: 1.55, 4: 1.725, 5: 1.9 };
  const number = sex == "male" ? 5 : -161;
  const years = new Date().getFullYear() - new Date(birthday).getFullYear();

  return Math.round(
    (10 * desiredWeight + 6, 25 * height - 5 * years + number) *
    lifestyleFactor[levelActivity]
  );
};

module.exports = calculateCalories;
