import React from 'react';

// компоненты
const Layout = require('../Layout');

// стили
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

module.exports = function FileView({ user, file }) {
  return (
    <Layout title={'Файл'} user={user}>
      <div className='file-view' data-id={file.id}>
        <h1>{file.name}</h1>
        <Card body className='card mb-5'>
          {file.description}
        </Card>
        <div>
          {user?.role === 'admin' ||
          (user?.role === 'teacher' && user?.id === file.teacherId) ? (
            <>
              <a href={`${file.path}`} download>
                <Button variant='primary' className='m-2'>
                  Скачать
                </Button>
              </a>
              <a href={`/file/update/${file.id}`}>
                <Button variant='success' className='m-2'>
                  Изменить
                </Button>
              </a>
              <Button variant='danger' className='buttonDelete m-2'>
                Удалить
              </Button>
            </>
          ) : (
            <>
              {(user?.role === 'student' || user?.role === 'teacher') && (
                <a href={`${file.path}`} download>
                  <Button variant='primary' className='m-2'>
                    Скачать
                  </Button>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};
