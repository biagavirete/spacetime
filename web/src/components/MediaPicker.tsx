/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { ChangeEvent, useState } from "react";

export function MediaPicker() {
  const [preview, setPreview] = useState('');

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewUrl = URL.createObjectURL(files[0]);
    setPreview(previewUrl);
  }

  return (
    <>
      <input
        type="file"
        id="media"
        name="coverUrl"
        onChange={onFileSelected}
        accept="image/*"
        className="invisible h-0 w-0"
      />
      {preview && <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover" />}
    </>
  );
}