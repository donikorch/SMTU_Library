const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Teacher } = require("../../db/models");

router.post("/", async (req, res) => {
  try {
    const { name, email, pass, facultyId } = req.body;
    const password = await bcrypt.hash(pass, 10);

    const teacher = await Teacher.create({ name, email, password, facultyId });
    // const html = res.renderComponent(
    //   TeacherItem,co
    //   { teacher },
    //   { doctype: false }
    // );
    res.redirect("/admin");
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
