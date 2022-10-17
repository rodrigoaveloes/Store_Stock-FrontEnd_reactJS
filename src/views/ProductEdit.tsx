import { useForm, SubmitHandler  } from "react-hook-form";
import { useEffect, useState } from "react";
import { ProductType } from "../types/types";
import axios from "axios";
import qs from 'qs';
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const Edit = () => {
    const [product, setProduct] = useState<ProductType>();
    let {id} = useParams();

    const success = () => toast.success('Produto atualizado com sucesso!');
    const error = () => toast.error("Não foi possivel atualizar os dados tente novamente 😢")

    useEffect(() =>{
      const req = async () => {
        const response = await axios.get(`http://localhost:4000/api/produto/${id}`)
         await setProduct(response.data.product);
      }

      req();
      
    }, [])
    
    // formulario + put para atualizar
    const redirect = useNavigate()
    const { register, handleSubmit, formState: {errors }} = useForm<ProductType>()
    const onSubmit: SubmitHandler<ProductType> = async (data) => {
      try{
        await axios.put(`http://localhost:4000/api/produto/${id}`, qs.stringify(data))
        success();
        await redirect('/produtos')
      }
      catch (e) {
        error()
      }
    }

      return(
        <>
        <Toaster/>
        <div className=" px-4 py-1 md:py-5 mx-auto my-36 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

            <div className="shadow-md rounded-lg flex   sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border border-lime-400 hover:bg-slate-50 transition duration-300 delay-150">
              <div className="my-3 mx-3 ">
              <img className="rounded-lg max-h-32 min-h-300  md:m-1" src={product?.image} alt="" />
              <h1 className=" my-3 mx-3 md:text-3xl lg:text-xl font-semibold text-center">{product?.name}</h1>
              </div>  

              <div className="flex-col my-auto mx-10">
              <div className="flex my-3">
              <h1 className="text-sm md:text-lg font-normal mx-3 md:mx1 text-slate-400">Preço:</h1><p className="text-slate-600 my-auto text-sm md:text-lg"> R${product?.price}</p><br/>
              </div>
              <div className=" flex my-3">
              <h1 className="text-sm md:text-lg font-normal mx-3 md:mx1 text-slate-400">Cor/Variação:</h1><p className="text-slate-600 my-auto text-sm md:text-lg"> {product?.color}</p><br/>
              </div>
              <div className="flex my-3">
              <h1 className="text-sm md:text-lg font-normal mx-3 md:mx1 text-slate-400">Categoria:</h1><p className="text-slate-600 my-auto text-sm md:text-lg"> {product?.category}</p><br/>
              </div>
              <div className="flex  my-3">
              <h1 className="text-sm md:text-lg font-normal mx-3 md:mx1  text-slate-400">Descricao:</h1><p className="text-slate-600 my-auto text-sm md:text-lg mx-3 md:mx1"> {product?.description}</p> <br/>
              </div>
              </div>

            </div>



                <div className="flex justify-center">
                <h1 className="my-12 text-2xl font-semibold text-slate-500">Atualizar dados do produto</h1>
                </div>


                <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label className="custom-label">Nome do Produto</label>
                    <input type="text" className="custom-input"
                     defaultValue={product?.name}
                     {...register("name", { required: true, maxLength: 50 })}
                     required/>
                     {errors?.name && <p className="text-amber-500">Coloque um titulo valido de no maximo 50 caracteres</p>}
                </div>

                <div>
                    <label  className="custom-label">Preço</label>
                    <input 
                    type="text-numeric"
                    className="custom-input" 
                    placeholder="R$1.999,00"
                    defaultValue={product?.price}
                    {...register("price", {required: true, min: 1, max: 100000 })}
                    />
                     {errors?.price && <p className="text-amber-500">Coloque um preço valido</p>}
                </div>

                <div>
                    <label  className="custom-label">descrição</label>
                    <input type="text" className="custom-input" 
                    defaultValue={product?.description}
                    {...register("description", {required: true, maxLength: 300 })}
                    required/>
                     {errors?.description && <p className="text-amber-500">Numero de caracteres ultrapassado "max:300"</p>}
                </div>

                <div>
                    <label  className="custom-label">Cor/variação</label>
                    <input type="text" className="custom-input" 
                    defaultValue={product?.color}
                    {...register("color",  { maxLength: 15 })}
                    />
                     {errors?.description && <p className="text-amber-500">Numero de caracteres ultrapassado "max:15"</p>}
                </div> 
               
                <div>
                    <label  className="custom-label">Categoria</label>
                    <input type="text" className="custom-input"
                    defaultValue={product?.color}
                    {...register("category",  { required: true, maxLength: 20 })}
                    />
                     {errors?.description && <p className="text-amber-500">Defina uma categoria "max:20" Caracteres</p>}
                </div>

                <div>
                    <label  className="custom-label">Imagem</label>
                    <input type="text" className="custom-input"
                    defaultValue={product?.image}
                    {...register("image",  { required: true, maxLength: 300 })}
                    />
                     {errors?.description && <p className="text-amber-500">Defina uma categoria "max:20" Caracteres</p>}
                </div>
            </div>
        
                <button type="submit" className="custom-button">
                    Atualizar
                </button>
            </form>
                </div>
                    </>

      )
  }