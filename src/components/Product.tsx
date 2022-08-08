import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../controller/Api';
import { IFormInputs } from "../types/types";


type Props = {
    data: IFormInputs;
}
const deleteProduct = async (id: number) =>{
   await Api.deleteProduct(id);
}


export const Product = ({data}: Props) => {
    return(
            <>  
            <tr className="bg-white border-b dark:bg-gray-50 dark:border-gray-200">
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
                        <Link to={'/editar/produto/'+ data.id} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</Link>
                        <button onClick={()=>deleteProduct(data.id)} className=" mx-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Excluir</button>
                    </td>
                </tr>
            </>

    )
}