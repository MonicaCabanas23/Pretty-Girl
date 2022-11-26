import React, { useState, useEffect } from 'react'
import './ImageUploader.scss'
import ImageUploading from 'react-images-uploading';

const ImageUploader = ({setFormData}) => {
    const [images, setImages] = useState([]);
    const auxForm = new FormData();
    auxForm.append('upload_preset', 'xrtjqe03');

    useEffect(() => {   
        const images_ = JSON.parse(localStorage.getItem("images"));
        if (images_) {
            setImages(images_);
        }
    }, []);

    useEffect(() => {
        console.log('cambio con cada imagen')
        if(images.length > 0) {
            setFormData(auxForm);
        }
    }, [images]);

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        localStorage.setItem("images", JSON.stringify(images));
    };

    return (
        <div className="uploader-container">
            <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
                {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps, }) => (
                    <div className="uploader-wrapper">
                        <div className="actions">
                            <button className='uploader-space' style={isDragging ? { color: '#EF233C' } : undefined} onClick={onImageUpload} {...dragProps}>
                                Arrastre y suelte las imágenes aquí para subirlas
                            </button>
                        </div>
                        <div className="images-container">
                            {
                                images.length == 0 ?
                                    <div className='information-message'>
                                        <figure>
                                            <img src="./../../src/assets/img/box.png" alt="empty" />
                                        </figure>
                                        <p> Aún no tienes imágenes :/ </p>
                                    </div> :
                                    imageList.map((image, index) => (
                                        auxForm.append('file', image.file),
                                        <div key={index} className="image-item">
                                            <figure>
                                                <img src={image.data_url} alt={image.file.name} width="100" />
                                            </figure>
                                            <div className="image-btn-wrapper">
                                                <button className='update' onClick={() => onImageUpdate(index)}><i className="fa-solid fa-pen-to-square"></i></button>
                                                <button className='delete' onClick={() => onImageRemove(index)}><i className="fa-solid fa-trash"></i></button>
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