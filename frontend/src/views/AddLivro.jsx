import {React, useEffect, useState} from 'react';
import { useFormik } from 'formik'; // Importando o useFormik
import * as Yup from 'yup'; // Importando o Yup para fazer a validação dos campos
import config from '../data/config';

const AddLivro = (props) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msgLoad, setMsgLoad] = useState('Carregando dados...');

  const fetchData = async () => {
      try {
          const response = await fetch(config.apiUrl + '/genero/list');
          const json = await response.json();
          console.log('Fetched data:', json);
          if(json.status === 200){
              setData(json.success.msg);
              setLoading(false);
          }
          
      } catch (error) {
          setMsgLoad('Erro ao carregar Generos');
          console.error('Error fetching data:', error);
      }
  };

  useEffect(() => {
      fetchData();
  }, []); 

  // Definindo o schema de validação com Yup
  const validationSchema = Yup.object().shape({
    titulo: Yup.string()
      .required('O título é obrigatório'),
    linkImg: Yup.string()
      .required('O link da imagem é obrigatório'),
    genero: Yup.string()
      .required('Selecione o gênero'),
    desc: Yup.string()
      .required('A descrição é obrigatória')
  });

  const formik = useFormik({
    initialValues: {
      titulo: '',
      linkImg: '',
      genero: '',
      desc: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className='container'>
      <h1>Adicionar Livro:</h1>
      {loading ? (
        <div className='centered'>
          <div className='d-flex justify-content-center flex-column align-items-center'>
            {msgLoad === 'Carregando dados...' ? <img src="https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif" style={{maxWidth: "1000px"}} alt="" /> : <img src="https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif" style={{maxWidth: "1000px"}} alt="" />}
            <h1>{msgLoad}</h1>
          </div>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>

          <div className="form-group mt-4">
            <label htmlFor="titulo">Título:</label>
            <input type="text" className="form-control" id="titulo" placeholder="Inception" {...formik.getFieldProps('titulo')} />
            {formik.touched.titulo && formik.errors.titulo ? (
              <div className="text-danger">{formik.errors.titulo}</div>
            ) : null}
          </div>


          <div className="form-group mt-3">
            <label htmlFor="linkImg">Link Imagem:</label>
            <input type="text" className="form-control" id="linkImg" placeholder="link" {...formik.getFieldProps('linkImg')} />
            {formik.touched.linkImg && formik.errors.linkImg ? (
              <div className="text-danger">{formik.errors.linkImg}</div>
            ) : null}
          </div>


          <div className="form-group mt-3">
            <label htmlFor="genero">Selecione o Gênero:</label>
            <select className="form-control" id="genero" {...formik.getFieldProps('genero')}>
              <option value="">Selecione</option>
              {data.map((item, index) => ( 
                <option value={item.id} key={index}>{item.descricao}</option>
              ))}
            </select>
            {formik.touched.genero && formik.errors.genero ? (
              <div className="text-danger">{formik.errors.genero}</div>
            ) : null}
          </div>


          <div className="form-group mt-3">
            <label htmlFor="desc">Descrição:</label>
            <textarea className="form-control" id="desc" rows="5" {...formik.getFieldProps('desc')} />
            {formik.touched.desc && formik.errors.desc ? (
              <div className="text-danger">{formik.errors.desc}</div>
            ) : null}
          </div>


          <div className=' d-flex justify-content-end mt-3'>
            <button type="submit" className="btn btn-primary">Adicionar</button>
          </div>
          
        </form>
      )}
    </div>
  );
}

export default AddLivro;
