import errorImg from '../assets/404.jpg';

export const NotFound = () => {
    return (
        <>
        <div className="min-w-screen min-h-screen bg-white flex items-center p-2 lg:p-20 overflow-hidden relative">
        <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white  p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
            <div className="w-full md:w-1/2">
                <div className="mb-10 md:mb-20 text-lime-800 font-light">
                    <h1 className="font-black uppercase text-3xl lg:text-5xl text-lime-500 mb-10">ERROR: 404 <br/> Pagina não encontrada!</h1>
                    <p>Tente novamente um novo endereço ou recarregue a pagina</p>
                    <p>ou abaixo siga para a home</p>
                </div>
                <div className="mb-20 md:mb-0">
                    <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-lime-500 hover:text-lime-600"><i className="mdi mdi-arrow-left mr-2"></i> <a href="/">Voltar para a pagina inicial</a> </button>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                    <img className="" src={errorImg} alt="" />
            </div>
            
        </div>
        
    </div>
    
   
        </>
    )
}






