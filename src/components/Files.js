import {useEffect, useState} from "react";


const Files = ({files}) => {

    const [arrayItems, setArrayItems] = useState([]);
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        if (Array.isArray(files) && files.length > 0) {
            setArrayItems(files);
        }
    }, [files]);



    return (<div className={"my-9"}>
        {arrayItems.length > 0 ? (arrayItems.map((file) => (
                <div key={file.id} className="flex items-start justify-center gap-2.5 mb-7">
                    <div
                        className="flex flex-col w-7/12 leading-1.5 p-4 border-gray-200 bg-pink-500  dark:bg-blue-500">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        </div>
                        <p className="text-white">
                             . {file.filename}
                        </p>

                        {/*<a href={API_ROUTE + 'uploads/'+ file.filename} target="_blank" rel="noopener noreferrer" className="text-sm font-normal py-2.5 text-gray-900 dark:text-white italic">*/}
                        {/*    "{file.filename}"*/}
                        {/*</a>*/}
                    </div>
                </div>))
        ) : (
            <div className="flex items-start justify-center gap-2.5 mb-7">
                <div
                    className="flex flex-col w-7/12 leading-1.5 p-4 border-gray-200 bg-pink-500 rounded-e-3xl rounded-es-3xl dark:bg-blue-500">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white italic">
                            "Aucune fichier n'est disponible !"
                        </p>
                    </div>
                </div>
            </div>
        )}
    </div>);
};

export default Files;


