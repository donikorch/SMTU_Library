const router = require("express").Router();

// компоненты
const AdminPanel = require("../../components/pages/AdminPanel");

// модели
const { Teacher, Faculty, Admin } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.findAll({ include: Faculty });
    const faculties = await Faculty.findAll();

    const html = res.renderComponent(AdminPanel, { teachers, faculties });

    res.send(html);
  } catch (error) {
    res.json({ message: "error", error });
  }
});

module.exports = router;
