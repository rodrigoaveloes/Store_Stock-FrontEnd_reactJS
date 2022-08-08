import axios from 'axios';
import qs from 'qs';


const url =  axios.create({
    baseURL: 'http://localhost:4000'
  });
export const Api = {

    getAllProducts: async () => {

      try{
        let response = await url.get('/api/produtos')
        return response.data;
      } catch (e) {
        alert('Houve um erro ao carregar os produtos')
      }
      },
    getProduct: async (id: number) => {

      try{

        let response = await url.get(`/api/produto/${id}`)
        return response.data;
      }
      catch (e) {
        alert('Houve um erro na busca desse produto, tente novamente')
      }
    },
    deleteProduct: async (id: number) => {

      try{

        let response = await url.delete(`/api/produto/${id}`)
        return alert('Produto excluido com sucesso!')
      }
      catch (e) {
        alert('tente novamente')
      }
    }





    }