import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '../../../components/Button';

const Manage = inject('uploadStore')(
  observer(props => {
    const { uploadStore } = props;

    useEffect(() => {
      uploadStore.loadUploads();
    }, []);

    return (
      <>
        <h1>Uploads screen</h1>
        <ul>
          {uploadStore.uploads.map((upload, index) => {
            return <li key={index}>{upload.name}</li>;
          })}
        </ul>
      </>
    );
  })
);

export default Manage;
