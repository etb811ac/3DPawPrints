import './uploadPhoto.scss';
import { React, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

const UploadPhoto = ({ images, setImages }) => {

    const [file, setFile] = useState()


    useEffect(() => {
        if (file !== undefined) {
            let reader = new FileReader() 
            reader.readAsDataURL(file)
            reader.onload = () => { 
                let temp = images;
                temp.push({"file" : file, "base64" : reader.result, id: uuid()}) 
                setImages(temp)
                setFile()
            }
        }
    }, [file, images, setImages])

    const onImageUp = (event) => {
        setFile(event.target.files[0])
        event.target.value = ""
    }



    const deleteImage = (key) => {
         setImages(images.filter((img, index) => {return index !== key}))
    }

    return (
        <div className="photo-upload-container">
            <input type="file" accept="image/jpeg, image/png, image/jpg, image/svg" onChange={onImageUp}></input>
            <div className="image-preview">
                {images.map((img, index) => {
                    return (
                        <div className='image' key={index}>
                            <img src={URL.createObjectURL(img.file)} alt="" />
                            <div className="delete" onClick={() => { deleteImage(index) }}>X</div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
};

export default UploadPhoto;