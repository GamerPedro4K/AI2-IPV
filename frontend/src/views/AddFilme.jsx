import {React, useEffect, useState, useRef} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {getGeneros} from '../services/generoService';
import { Link, useNavigate } from 'react-router-dom';
import { addFilme as AddFilmeAPI } from '../services/filmesService';
import { Toast } from 'primereact/toast';

const AddFilme = (props) => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msgLoad, setMsgLoad] = useState('Carregando dados...');
  const toast = useRef(null);

  const fetchData = async () => {
      getGeneros().then((data) => {
          setData(data);
          setLoading(false);
      })
      .catch((err) => {
          setMsgLoad(err.message);
      });
  };

  useEffect(() => {
      fetchData();
  }, []); 

  const validationSchema = Yup.object().shape({
    titulo: Yup.string()
      .required('O título é obrigatório')
      .max(250, 'A título deve ter no máximo 250 caracteres'),
    foto: Yup.string()
    .required('O link da imagem é obrigatório')
    .url('O link da imagem deve ser um URL válido')
    .matches(/.(png|jpg|gif)$/, 'O link da imagem deve terminar com .png, .jpg ou .gif')
    .max(250, 'O link deve ter no máximo 250 caracteres'),
    idGenero: Yup.string()
      .required('Selecione o gênero'),
    descricao: Yup.string()
    .required('A descrição é obrigatória')
    .min(10, 'A descrição deve ter no mínimo 10 caracteres')
    .max(250, 'A descrição deve ter no máximo 250 caracteres'),
  });

  const formik = useFormik({
    initialValues: {
      titulo: '',
      foto: '',
      idGenero: '',
      descricao: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      AddFilmeAPI(values).then((data) => {
        toast.current.show({ severity: 'success', summary: 'Sucesso: ', detail: "Filme adicionado com sucesso", life: 3000 });
        navigate("/");
      })
      .catch((err) => {
        toast.current.show({ severity: 'error', summary: 'Erro: ', detail: err.message, life: 3000 });
      });
    },
  });

  return (
    <div className='container'>
      <Toast ref={toast} />
      <h1>Adicionar Filme:</h1>
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
            <label htmlFor="foto">Link Imagem:</label>
            <input type="text" className="form-control" id="foto" placeholder="link" {...formik.getFieldProps('foto')} />
            {formik.touched.foto && formik.errors.foto ? (
              <div className="text-danger">{formik.errors.foto}</div>
            ) : null}
          </div>


          <div className="form-group mt-3">
            <label htmlFor="idGenero">Selecione o Gênero:</label>
            <select className="form-control" id="idGenero" {...formik.getFieldProps('idGenero')}>
              <option value="">Selecione</option>
              {data.map((item, index) => ( 
                <option value={item.id} key={index}>{item.descricao}</option>
              ))}
            </select>
            {formik.touched.idGenero && formik.errors.idGenero ? (
              <div className="text-danger">{formik.errors.idGenero}</div>
            ) : null}
          </div>


          <div className="form-group mt-3">
            <label htmlFor="descricao">Descrição:</label>
            <textarea className="form-control" id="descricao" rows="5" {...formik.getFieldProps('descricao')} />
            {formik.touched.descricao && formik.errors.descricao ? (
              <div className="text-danger">{formik.errors.descricao}</div>
            ) : null}
          </div>


          <div className=' d-flex justify-content-end mt-3'>
            <Link to="/" className="btn btn-secondary me-3">Voltar</Link>
            <button type="submit" className="btn btn-primary">Adicionar</button>
          </div>
          
        </form>
      )}
    </div>
  );
}

export default AddFilme;
