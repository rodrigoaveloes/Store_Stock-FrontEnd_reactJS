import { useEffect, useState } from 'react';
import { Product } from '../components/Product';
import { Api } from '../controller/Api';
import { IFormInputs } from "../types/types";


export const Products = () => {
    
    const [productList, setProductList] = useState<IFormInputs[]>([]);
    
    useEffect(() => {
        loadProducts();
    },[]);
    
    
    const loadProducts = async () => {
    let json = await Api.getAllProducts();
    setProductList(json);  
    }
    
    

    return(
        <main className=" px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-12">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" className="py-3 px-6">
                        Imagem do produto
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Nome
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Cor
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Categoria
                    </th>
                    <th scope="col" className="py-3 px-6">
                    Preço
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Ação
                    </th>
                </tr>
            </thead>
            <tbody>
            {productList.map((item, index) => (
              <Product data={item} />
            ))}

                
            </tbody>
        </table>
        </div>
        </main>
    )
}