import React, { ChangeEventHandler } from "react";
import Image from 'next/image'
import * as Helpers from "./helpers";
import { CustomImage } from "./custom-image";

export function MainFunc() {
  const [uploadedImages, setUploadedImages] = React.useState<CustomImage[]>([]);

  const handleImageUpload = React.useCallback<
    ChangeEventHandler<HTMLInputElement>
    >
    (
    (event) => {
      const fileList = event.target.files;
      const fileArray = fileList ? Array.from(fileList) : [];
      const fileToImagePromises = fileArray.map(Helpers.fileToImageURL);

      Promise.all(fileToImagePromises).then(setUploadedImages);
    },
    [setUploadedImages]
  );

  const cleanUpUploadedImages = React.useCallback(() => {
    setUploadedImages([]);
    uploadedImages.forEach((image) => {
      URL.revokeObjectURL(image.src);
    });
  }, [setUploadedImages, uploadedImages]);

  const generatePdfFromImages = React.useCallback(() => {
    Helpers.generatePdfFromImages(uploadedImages);
    cleanUpUploadedImages();
  }, [uploadedImages, cleanUpUploadedImages]);

  return (
    <>
      <h1>Convert images to PDFs</h1>

      <div className="images-container">
        {uploadedImages.length > 0 ? (
          uploadedImages.map((image) => (
            <Image
            width={400}
            height={400}
              key={image.src} src={image.src} className="uploaded-image" alt="uploaded-image" />
          ))
        ) : (
          <p>Upload some images...</p>
        )}
      </div>

      <div className="buttons-container">
        <label htmlFor="file-input">
          <span className="button">Upload images</span>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            multiple
          />
        </label>

        <button
          onClick={generatePdfFromImages}
          className="button"
          disabled={uploadedImages.length === 0}
        >
          Generate PDF
        </button>
      </div>
    </>
  );
}

