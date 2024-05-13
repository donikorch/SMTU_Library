const router = require("express").Router();


const mainRoute = require("./views/main.route");
const authRoute = require("./views/auth.route");
const searchRoute = require("./views/search.route");
const profileRoute = require("./views/profile.route");
const adminRoute = require("./views/admin.route");


const authApi = require("./api/api.auth.route");
const profileApi = require("./api/api.profile.route");
const adminApi = require("./api/api.admin.route");

router.use("/", mainRoute);
router.use("/auth", authRoute);
router.use("/search", searchRoute);
router.use("/profile", profileRoute);
router.use("/admin", adminRoute);

router.use("/api/auth", authApi);
router.use("/api/profile", profileApi);
router.use("/api/admin", adminApi);

module.exports = router;
