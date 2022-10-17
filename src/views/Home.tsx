import { useForm, SubmitHandler  } from "react-hook-form";
import { useState } from "react";
import { ProductType } from "../types/types";
import axios from "axios";
import qs from 'qs';
import CurrencyInput from 'react-currency-input-field';
import toast, { Toaster } from "react-hot-toast";


export const Home = () => {
    const error = () => toast.error("Não foi possivel adicionar os dados tente novamente 😢")
    const success = () => toast.success('Produto adicionado com sucesso!');

  const [data, setData] = useState();
  
            const { register, handleSubmit,reset, formState: { errors } } = useForm<ProductType>()
            const onSubmit: SubmitHandler<ProductType> = async (data) => {

                try{
                    await axios.post('http://localhost:4000/api/adicionarproduto', qs.stringify(data))
                    success();
                    reset()
                }
                catch (e) {
                    error();
                }
            }

    return(
        <>
        <div className=" px-4 py-5 mx-auto lg:my-36 my-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                 <Toaster/>
                <div className="flex justify-center">
                <h1 className="my-12 text-2xl font-semibold text-slate-500">Cadastrar um novo produto</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label  className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Nome do Produto</label>
                    
                    <input type="text" className="custom-input"
                     placeholder="Microsoft Surface Pro..." 
                     {...register("name", { required: true, maxLength: 50 })}
                     required/>
                     {errors?.name && <p className="text-amber-500">Coloque um titulo valido de no maximo 50 caracteres</p>}

                </div>
                <div>
                    <label  className="custom-label">Preço</label>
                    <CurrencyInput type="text" className="custom-input" 
                    placeholder="R$1.999,00"
                    {...register("price", {required: true, min: 1, max: 100000 })}
                    />
                     {errors?.price && <p className="text-amber-500">Coloque um preço valido</p>}

                </div>

                <div>
                    <label  className="custom-label">descrição</label>
                    <input type="text" className="custom-input" 
                    placeholder="descrição..." 
                    {...register("description",  { required: true, maxLength: 300 })}
                    required/>
                     {errors?.description && <p className="text-amber-500">Numero de caracteres ultrapassado "max:300"</p>}

                </div> 
                <div>
                    <label  className="custom-label">Cor/variação</label>
                    <input type="text" className="custom-input" placeholder="cinza chumbo"
                    {...register("color",  { maxLength: 15 })}
                    />
                     {errors?.description && <p className="text-amber-500">Numero de caracteres ultrapassado "max:15"</p>}

                </div> 
               
                <div>
                    <label  className="custom-label">Categoria</label>
                    <input type="text" className="custom-input"
                     placeholder="Notebook"
                    {...register("category",  { required: true, maxLength: 20 })}
                    />
                     {errors?.description && <p className="text-amber-500">Defina uma categoria "max:20" Caracteres</p>}
                </div>

                <div>
                    <label  className="custom-label">Imagem</label>
                    <input type="text" className="custom-input"
                     placeholder="Link da imagem"
                    {...register("image",  { required: true, maxLength: 300 })}
                    />
                     {errors?.description && <p className="text-amber-500">Defina uma categoria "max:20" Caracteres</p>}
                </div>

            </div>
        
                <button type="submit" className="custom-button">
                    Cadastrar Produto
                </button>
        </form>
                </div>

        </>
    )
}