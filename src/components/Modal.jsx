/*eslint-disable*/
import axios from 'axios';
import { useState } from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';

const Modal = ({ closeModal }) => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setUploadedFiles([...uploadedFiles, ...newFiles]);
    };

    const removeFile = (index) => {
        const newFiles = [...uploadedFiles];
        newFiles.splice(index, 1);
        setUploadedFiles(newFiles);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();

            uploadedFiles.forEach((file) => {
                formData.append('files', file);
            });

            const response = await axios.post('https://taskserver-production-1ddf.up.railway.app/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            toast.success('Files uploaded successfully!');
            console.log('Files uploaded successfully!', response);
            closeModal();
        } catch (error) {
            alert('Failed to upload files');
            console.error('Error uploading files:', error);
        }
    };

    return (
        <div className="absolute z-10 top-0 left-0 right-0 bottom-0 bg-opacity-50 flex items-center justify-center shadow-xl">
            <div className="bg-slate-300 w-4/12 p-4 rounded-md text-black">
                <div className="flex justify-between">
                    <h3 className="font-bold text-lg">Upload File</h3>
                    <button className='bg-black px-4 hover:bg-slate-700 text-white' onClick={closeModal}>Close</button>
                </div>
                <input className='py-4' type="file" multiple onChange={handleFileChange} />
                <div>
                    <h4 className=''>File List:</h4>
                    <div className='h-px bg-black my-2' />
                    <ul>
                        {uploadedFiles.map((file, index) => (
                            <li key={index} className='flex justify-between'>
                                <span>
                                    {file.name} - {file.type}
                                </span>
                                <RiDeleteBin2Fill className='text-red-500 cursor-pointer text-lg' onClick={() => removeFile(index)} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex justify-center mt-10'>
                    <button className='mt-5 shadow-lg bg-purple-500 hover:bg-purple-950 px-7 text-center text-white font-semibold py-1 rounded-md' type="button" onClick={handleUpload}>
                        Upload
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Modal;
