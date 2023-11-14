import React, { useState, useLayoutEffect, useEffect } from "react";
import { Col, Input, Radio, message, Upload, Button, Card, Modal } from "antd";
import { InboxOutlined, CameraTwoTone, DeleteTwoTone } from '@ant-design/icons';
import WebcamComponent from "./WebcamComponent";
import { Main, ImageUploadWrapper, SerialInputWrapper } from "./Style";
import { DataService } from "../../../config/dataService/dataService";

function ImageUpload() {
    const isMobile = useIsMobile();
    const [serial, setSerial] = useState("");
    const [imageType, setImageType] = useState("in");
    const [imageFile, setImageFile] = useState({});
    const [showFileList, setShowFileList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [imageName, setImageName] = useState("");

    const { Dragger } = Upload;

    const props = {
        name: 'file',
        beforeUpload (file) {
            const isIMG = (file.type === "image/png") || (file.type === "image/jpeg") || (file.type === "image/jpg");
            if (!isIMG) message.error("You could select the image type");
            setShowFileList(true);
            return false; 
        },
        maxCount: 1,
        onChange(info) {
            setImageFile(info.file);
            setImageName(info.file.name);
        },
        showUploadList: showFileList
    };

    const handleImageUpload = async () => {
        if (serial === "") {
            message.error("You should input all the field");
        } else {
            const formData = new FormData();
            formData.append('serial', serial);
            formData.append('imageType', imageType);
            formData.append('imageFile', imageFile);

            await DataService.post('image/imageUpload', formData)
                .then(response => {
                    if(response.status === 201) message.success("Image uploaded successfully!");
                    setSerial("");
                    setImageType("in");
                    setShowFileList(false);
                    setImageFile({});
                    setImageName("");
                })
                .catch(error => {
                    if(error.response) {
                        if (error.response.status === 500) message.error("Internal Server Error");
                    }
                });
        }
    }

    const startWebcam = () => {
        setShowModal(true)
    }

    const handleModalOk = () => {
        if(!imageFile) message.error("You don't have a photo.")
        setShowModal(false)
    }

    const handleModalCancel = () => {
        setShowModal(false)
    }

    const getFile = (base64String) => {
        const filename = "captured_image.png";
        const tmpImage = dataURItoFile(base64String, filename);
        setImageFile(tmpImage);
        setImageName(tmpImage.name);
    }

    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
    
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
    
        return new Blob([ab], { type: mimeString });
    }
    
    const dataURItoFile = (dataURI, fileName) => {
        const blob = dataURItoBlob(dataURI);
        return new File([blob], fileName, { type: blob.type });
    }

    const handleClickDelete = () => {
        setImageFile({});
        setImageName("");
    }
    

    return (
        <>
            <Main>
                <Col md={24} xxl={16}>
                    <ImageUploadWrapper>
                        <div className='date-filter align-center-v'>
                            <label>Serial Number:</label>
                            <div className='date-pick'>
                                <SerialInputWrapper>
                                    <Input onChange={(e) => setSerial(e.target.value)} value={serial}/>
                                </SerialInputWrapper>
                            </div>
                        </div>
                    </ImageUploadWrapper>
                    <ImageUploadWrapper>
                        <div className="date-filter align-center-v">
                            <label>Image Type: </label>
                            <div className='date-pick'>
                                <Radio.Group defaultValue={1}>
                                    <Radio onClick={() => setImageType("in")} value={1}>Inbound</Radio>
                                    <Radio onClick={() => setImageType("out")} value={2}>Outbound</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                    </ImageUploadWrapper>
                    <div style={{border: "1px dashed #E3E6EF", borderRadius: "4px"}}>
                        <Card bordered={false}>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            </Dragger>
                        </Card>
                        <Card bordered={false}>
                            <div onClick={startWebcam} style={{cursor: "pointer"}}>
                                <div style={{width: '100%', display: 'flex', justifyContent: "center"}}><CameraTwoTone style={{ fontSize: '250%' }} /></div>
                                <p style={{width: '100%', marginTop: '30px', display: 'flex', justifyContent: "center", fontSize: "130%", color: '#50ABFF'}}>Import from Camera.</p>
                            </div>
                        </Card>
                    </div>
                    {imageName && (
                        <div style={{display: "flex", justifyContent:"space-between"}}>
                            <div style={{display: "flex"}}>
                                <p>{ imageName }</p>
                            </div>
                            <DeleteTwoTone onClick={handleClickDelete} />
                        </div>
                    )}
                    <div className="upload-btn">
                        <Button onClick={() => handleImageUpload()} type="primary">Upload</Button>
                    </div>
                    <Modal
                        title="Import from camera"
                        open={showModal}
                        onOk={handleModalOk}
                        onCancel={handleModalCancel}
                        width={!isMobile && 688}
                    >
                        <WebcamComponent getFile = {getFile} />
                    </Modal>
                </Col>
            </Main>
        </>
    );
}

export default ImageUpload;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};