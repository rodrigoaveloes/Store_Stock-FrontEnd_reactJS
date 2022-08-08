import { Product } from "../components/Product"
import { useForm, SubmitHandler  } from "react-hook-form";
import { useState } from "react";
import { IFormInputs } from "../types/types";
import axios from "axios";
import qs from 'qs';

export const Home = () => {


  const [data, setData] = useState();
  
            const { register, handleSubmit,reset, formState: { errors } } = useForm<IFormInputs>()
            const onSubmit: SubmitHandler<IFormInputs> = async (data) => {

                try{

                    await axios.post('http://localhost:4000/api/adicionarproduto', qs.stringify(data))
                    alert('produto adicionado com sucesso')
                    reset()
                }

                catch (e) {
                    alert('Não foi possivel adicionar o produto tente novamente')
                }
         }



  
    return(
        <>
        <div className=" px-4 py-5 mx-auto my-36 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

                <div className="flex justify-center">
                <h1 className="my-12 text-2xl font-semibold">Cadastrar um novo produto</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Nome do Produto</label>
                    
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Microsoft Surface Pro..." 
                     {...register("name", { required: true, maxLength: 50 })}
                     required/>
                     {errors?.name && <p className="text-amber-500">Coloque um titulo valido de no maximo 50 caracteres</p>}

                </div>
                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Preço</label>
                    <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="R$1999"
                    {...register("price", {required: true, min: 1, max: 10000 })}
                    />
                     {errors?.price && <p className="text-amber-500">Coloque um preço valido</p>}

                </div>

                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">descrição</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="descrição..." 
                    {...register("description",  { required: true, maxLength: 300 })}
                    required/>
                     {errors?.description && <p className="text-amber-500">Numero de caracteres ultrapassado "max:300"</p>}

                </div> 
                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Cor/variação</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="cinza chumbo"
                    {...register("color",  { maxLength: 15 })}
                    />
                     {errors?.description && <p className="text-amber-500">Numero de caracteres ultrapassado "max:15"</p>}

                </div> 
               
                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Categoria</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Notebook"
                    {...register("category",  { required: true, maxLength: 20 })}
                    />
                     {errors?.description && <p className="text-amber-500">Defina uma categoria "max:20" Caracteres</p>}
                </div>

                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Imagem</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Link da imagem"
                    {...register("image",  { required: true, maxLength: 300 })}
                    />
                     {errors?.description && <p className="text-amber-500">Defina uma categoria "max:20" Caracteres</p>}

                </div>
            </div>
        
                <button type="submit" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    Cadastrar Produto
                </button>
        </form>
                </div>

        </>
    )
}