const React = require("react");

// компоненты
const Layout = require("../Layout");

// стили
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TeacherItem from "../ui/TeacherItem";

module.exports = function AdminPage({ user, teachers, faculties }) {
  return (
    <>
      {user.role === "admin" ? (
        <>
          <Layout title={"Панель Администратора"} user={user}>
            <div>
              <p> Добавить преподавателя</p>
              <form action="/api/admin" method="POST">
                <Form.Group className="mb-3">
                  <Form.Label>ФИО</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="ФИО преподавателя"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Почта</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Почта"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="text"
                    name="pass"
                    placeholder="Пароль"
                    required
                  />
                </Form.Group>
                <Form.Label>Факультет</Form.Label>
                <Form.Select
                  name="facultyId"
                  aria-label="Default select example"
                  required
                >
                  <option value="">Выберите Предмет</option>
                  {faculties.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>
                      {faculty.name}
                    </option>
                  ))}
                </Form.Select>
                <Button type="submit">Добавить</Button>
              </form>
            </div>
            <div>
              <p>Список преподавателей</p>
              {teachers.map((teacher) => (
                <TeacherItem teacher={teacher} key={teacher.id} />
              ))}
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
