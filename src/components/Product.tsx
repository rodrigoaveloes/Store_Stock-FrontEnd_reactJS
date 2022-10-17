import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../controller/Api';
import { ProductType } from "../types/types";


type Props = {
    data: ProductType;
}
const deleteProduct = async (id: number) =>{
   await Api.deleteProduct(id);
}


export const Product = ({data}: Props) => {
    return(
            <>  
            <tr className="bg-gray-50 border-b border-gray-200 hover:bg-white transition duration-300 delay-75 cursor-pointer">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img className="w-16 rounded-sm "src={data.image} alt="" />
                    </th>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-gray-500">
                        {data.name}
                    </th>
                    <td className="py-4 px-6">
                        {data.color}
                    </td>
                    <td className="py-4 px-6">
                        {data.category}
                    </td>
                    <td className="py-4 px-6">
                       R$ {data.price}
                    </td>
                    <td className="py-4 px-6">
                        <div className="my-auto mx-auto">
                        <Link to={'/editar/produto/'+ data.id} className=" sm:mx-auto  xl:mx-3 font-medium text-blue-600 dark:text-blue-500 hover:underline my-auto">Editar</Link>
                        <button onClick={()=>deleteProduct(data.id)} className=" lg:mx-auto font-medium text-blue-600 dark:text-blue-500 hover:underline my-auto">Excluir</button>
                        </div>
                    </td>
                </tr>
            </>

    )
}