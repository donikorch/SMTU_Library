const React = require("react");

// компоненты
const Layout = require("../Layout");

// стили
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

module.exports = function TeacherChange({ user, teacher, faculties }) {
  return (
    <>
      {user.role === "admin" ? (
        <>
          <Layout title={"Панель Администратора"} user={user}>
            <div>
              <form action={`/api/admin/${teacher.id}`} method="POST">
                <Form.Group className="mb-3">
                  <Form.Label>ФИО</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    value={teacher.name}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Почта</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Почта"
                    value={teacher.email}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="text"
                    name="pass"
                    value="*******"
                    required
                  />
                </Form.Group>
                <Form.Label>Факультет</Form.Label>
                <Form.Select
                  name="facultyId"
                  aria-label="Default select example"
                  value={teacher.facultyId}
                  required
                >
                  {faculties.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>
                      {faculty.name}
                    </option>
                  ))}
                </Form.Select>
                <Button type="submit">Добавить</Button>
              </form>
            </div>
          </Layout>
        </>
      ) : (
        <div>
          {" "}
          <h1>404</h1>
        </div>
      )}
    </>
  );
};
