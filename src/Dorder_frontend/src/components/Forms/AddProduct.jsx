import React, { useState } from 'react';
import imageCompression from "browser-image-compression";

const AddProduct = ({ setAddProductModal, addProductHandler }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('sofa');
    const [shortDesc, setShortDesc] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'stock':
                setStock(value);
                break;
            case 'shortDesc':
                setShortDesc(value);
                break;
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Do something with the form values
        if (name && price && stock && image && category && shortDesc && description) {
            addProductHandler({ name, price, stock, image, category, shortDesc, description });
        } else {
            setIsLoading(false);
            alert("Invalid Inputs");
        }
    };



    const closeFormHandler = () => {
        setName('');
        setPrice(0);
        setStock(0);
        setImage('');
        setCategory('sofa');
        setShortDesc('');
        setDescription('');
        setAddProductModal(false);
    }


    const CompressedImage = async (file) => {
        try {
            const options = {
                maxSizeMB: 0.6,
                maxWidthOrHeight: 1024,
                useWebWorker: false,
            };
            const compressedBlob = await imageCompression(file, options);
            const compressedFile = new File([compressedBlob], file.name, {
                type: file.type,
            });
            console.log("Compressed File:", compressedFile);
            return compressedFile;
        } catch (error) {
            console.error("Error compressing image:", error);
            throw error;
        }
    };



    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const compressedFile = await CompressedImage(file);
                const reader = new FileReader();
                reader.readAsDataURL(compressedFile);
                console.log("Compressed File:", compressedFile);
                console.log("reader", reader);
            } catch (error) {
                console.error("Error during image processing:", error);
            }
        }
    };
    return (
        <React.Fragment>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Add Product
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Bell Bettom" required="true" value={name} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                            <select className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full' name="category" id="category" defaultValue={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="sofa">Sofa</option>
                                <option value="mobile">Mobile</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price (In ICP)</label>
                            <input type="number" min={0} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="1" required="true" value={price} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900">Stock Available</label>
                            <input type="number" min={0} name="stock" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="1" required="true" value={stock} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Image</label>
                            <input type="file" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Image Url" required="true" value={image} onChange={(e) => handleImageChange(e)} />
                        </div>
                        <div>
                            <label htmlFor="shortDesc" className="block mb-2 text-sm font-medium text-gray-900">Short Description</label>
                            <textarea rows="3" name="shortDesc" id="shortDesc" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Product short description..." required="true" value={shortDesc} onChange={handleInputChange}></textarea>
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                            <textarea rows="8" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Product brief description..." required="true" value={description} onChange={handleInputChange}></textarea>
                        </div>

                        <div className='flex gap-2 justify-center px-2'>
                            <button type="submit" disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                {isLoading ? `Submitting...` : `Add Product`}
                            </button>
                            <button onClick={closeFormHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddProduct;