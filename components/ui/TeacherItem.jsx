const React = require('react');
import { Button, Card } from 'react-bootstrap';

function TeacherItem({ teacher, user }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{teacher.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{teacher.Faculty.name}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{teacher.email}</Card.Subtitle>
        <Button variant="primary">Изменить</Button>
        <Button variant="primary">Удалить</Button>
      </Card.Body>
    </Card>
  );
}

export default TeacherItem;