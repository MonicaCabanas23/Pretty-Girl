import React, {useState, useEffect}from 'react'
import './ImageUploader.scss'
import ImageUploading from 'react-images-uploading';

const ImageUploader = () => {
    const [images, setImages] = useState([]);
    const maxNumber = 10;

    useEffect(() => {
        const images_ = JSON.parse(localStorage.getItem('images'));
        if (images_) {
         setImages(images_);
        }
      }, []);

    useEffect(() => {
        console.log(images);
        localStorage.setItem('images', JSON.stringify(images));
      }, [images]);

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="uploader-container">
        <ImageUploading multiple  value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
            {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps,}) => (
            <div className="uploader-wrapper">
                <div className="actions">
                    <button className='uploader-space' style={isDragging ? {color: '#EF233C'} : undefined} onClick={onImageUpload} {...dragProps}>
                    Arrastre y suelte las imágenes aquí para subirlas
                    </button>
                    <button onClick={onImageRemoveAll}>Eliminar todo</button>
                </div>
                <div className="images-container">
                    {
                        images ? 
                        <div className='information-message'>
                            <p> Aún no tienes imágenes :/ </p>
                        </div> : 
                        imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <div className="details-container">
                                    <figure>
                                        <img src={image.data_url} alt={image.file.name} width="100" />
                                    </figure>
                                    <p>{image.file.name}</p>
                                </div>
                                <div className="image-btn-wrapper">
                                    <button className='delete' onClick={() => onImageRemove(index)}>X</button>
                                </div>
                            </div>
                    ))
                    }
                </div>
            </div>
            )}
        </ImageUploading>
        </div>
    );
}

export default ImageUploader