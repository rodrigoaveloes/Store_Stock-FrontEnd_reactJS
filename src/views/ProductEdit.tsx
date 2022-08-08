import { useForm, SubmitHandler  } from "react-hook-form";
import { useEffect, useState } from "react";
import { IFormInputs } from "../types/types";
import axios from "axios";
import qs from 'qs';
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
    const [product, setProduct] = useState<IFormInputs>();
    let {id} = useParams();
    useEffect(() =>{
      const req = async () => {
        const response = await axios.get(`http://localhost:4000/api/produto/${id}`)
         await setProduct(response.data.product);
      }

      req();
      
    }, [])
    
    // formulario + put para atualizar
    const redirect = useNavigate()
    const { register, handleSubmit, formState: {errors }} = useForm<IFormInputs>()
    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {

      try{
        
        await axios.put(`http://localhost:4000/api/produto/${id}`, qs.stringify(data))
        alert('produto atualizado com sucesso')
        await redirect('/produtos')
      }
      catch (e) {
        alert('Não foi possivel atualizar o produto tente novamente')
      }
    }
    console.log(product)

      return(
        <>
        <div className=" px-4 py-5 mx-auto my-36 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="shadow-md rounded-lg flex  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">


              {/* 1 */}
            <div>
            <img className="rounded-lg max-h-32 m-3 " src={product?.image} alt="" />
            </div>  


            {/* 2 */}

            <div className="mt-12">
            <h1 className="text-3xl font-semibold text-center">{product?.name}</h1>
            </div>

           {/* 3 */}

            <div className="flex-col my-auto mx-10">
            <div className="flex my-3">
            <h1 className="text-lg font-medium mx-3 text-slate-400">Preço:</h1><p className="text-slate-600 my-auto"> R${product?.price}</p><br/>
            </div>


            <div className=" flex my-3">
            <h1 className="text-lg font-medium mx-3 text-slate-400">Cor/Variação:</h1><p className="text-slate-600 my-auto"> {product?.color}</p><br/>
            </div>

            <div className="flex my-3">
            <h1 className="text-lg font-medium mx-3 text-slate-400">Categoria:</h1><p className="text-slate-600 my-auto"> {product?.category}</p><br/>
            </div>

            <div className="flex my-3">
            <h1 className="text-lg font-medium mx-3 text-slate-400">Descricao:</h1><p className="text-slate-600 my-auto"> {product?.description}</p> <br/>
            </div>

            </div>



            </div>




       
                <div className="flex justify-center">
                <h1 className="my-12 text-2xl font-semibold">Atualizar dados do produto</h1>
                </div>


                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Nome do Produto</label>
                    
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     {...register("name", { required: true, maxLength: 20 })}
                     required/>
                     {errors?.name && <p className="text-amber-500">Coloque um titulo valido de no maximo 30 caracteres</p>}

                </div>
                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Preço</label>
                    <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    {...register("price", {required: true, min: 1, max: 10000 })}
                    />
                     {errors?.price && <p className="text-amber-500">Coloque um preço valido</p>}

                </div>

                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">descrição</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    {...register("description", {required: true, maxLength: 300 })}
                    required/>
                     {errors?.description && <p className="text-amber-500">Numero de caracteres ultrapassado "max:300"</p>}

                </div> 
                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Cor/variação</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    {...register("color",  { maxLength: 15 })}
                    />
                     {errors?.description && <p className="text-amber-500">Numero de caracteres ultrapassado "max:15"</p>}
                </div> 
               
                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Categoria</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("category",  { required: true, maxLength: 20 })}
                    />
                     {errors?.description && <p className="text-amber-500">Defina uma categoria "max:20" Caracteres</p>}
                </div>

                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Imagem</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("image",  { required: true, maxLength: 300 })}
                    />
                     {errors?.description && <p className="text-amber-500">Defina uma categoria "max:20" Caracteres</p>}

                </div>
            </div>
        
                <button type="submit" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    Atualizar
                </button>
        </form>
                </div>

        </>
      )
  }