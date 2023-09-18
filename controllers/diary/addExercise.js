const { Diary } = require('../../models');

const addExercise = async (req, res) => {
  const { _id: owner } = req.user;
  console.log(owner);

  console.log("REQ BODY", req.body);
  const { date, exercise } = req.body;

  try {
    const result = await Diary.findOneAndUpdate(
      { owner, date }, // Пошук запису за owner та date
      { $push: { exercises: exercise } }, // Додавання нового продукту до products
      { new: true } // Повертає оновлений запис
    );

    console.log("RESULT", result);

    if (!result) {
      // Якщо запис не знайдено, створити новий
      const newDiaryEntry = await Diary.create({ owner, date, exercises: [exercise] });
      console.log("NEW ENTRY", newDiaryEntry);
      res.status(201).json(newDiaryEntry);
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error("ERROR", error);
    res.status(500).json({ error: "Помилка при додаванні продукту до бази даних." });
  }
};

module.exports = addExercise;