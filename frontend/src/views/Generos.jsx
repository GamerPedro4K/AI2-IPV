import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { getGeneros, addGenero, updateGenero, deleteGenero} from '../services/generoService';


const Generos = (props) =>  {
    let generoVazio = {
        id: null,
        descricao: '',
    };

    const [generos, setGeneros] = useState(null);
    const [adicionarDialog, setAdicionarDialog] = useState(false);
    const [ApagarGeneroDialog, setApagarGeneroDialog] = useState(false);
    const [ApagarGeneroSelecionadosDialog, setApagarGeneroSelecionadosDialog] = useState(false);
    const [generoSelecionado, setGeneroSelecionado] = useState(generoVazio);
    const [generoSelecionados, setGeneroSelecionados] = useState(null);
    const [enviado, setEnviado] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        getGeneros().then((data) => setGeneros(data));
    }, []);

    //Adicionar / Editar

    const ModalAdicionar = () => {
        setGeneroSelecionado(generoVazio);
        setAdicionarDialog(true);
    };

    const editarGenero = (gen) => {
        setGeneroSelecionado({ ...gen });
        setAdicionarDialog(true);
    };

    const fecharModalAdcionar = () => {
        setGeneroSelecionado(generoVazio);
        setEnviado(false);
        setAdicionarDialog(false);
    };


    const guardarGenero = () => {
        setEnviado(true);
        if(generoSelecionado.descricao.length >= 4 ){
            if(generoSelecionado.id == null){
                addGenero(generoSelecionado).then(() => {
                    setAdicionarDialog(false);
                    toast.current.show({ severity:'success', summary: 'Sucesso', detail: 'Genero Adicionado!', life: 3000 });
                    getGeneros().then((data) => setGeneros(data));
                    setGeneroSelecionado(generoVazio);
                }).catch((err) => {
                    toast.current.show({ severity: 'error', summary: 'Erro', detail: err.message, life: 3000 });
                });
            }
            else{
                updateGenero(generoSelecionado).then(() => {
                    setAdicionarDialog(false);
                    toast.current.show({ severity:'success', summary: 'Sucesso', detail: 'Genero Alterado!', life: 3000 });
                    getGeneros().then((data) => setGeneros(data));
                    setGeneroSelecionado(generoVazio);
                }).catch((err) => {
                    toast.current.show({ severity: 'error', summary: 'Erro', detail: err.message, life: 3000 });
                });
            }
        }
    };

    //Apagar Linha

    const fecharModalApagar = () => {
        setGeneroSelecionado(generoVazio);
        setApagarGeneroDialog(false);
    };

    const AceitarApagar = (product) => {
        setGeneroSelecionado(product);
        setApagarGeneroDialog(true);
    };

    const ApagarGenero = async () => {
        for (const element of generos) {
            if(element.id === generoSelecionado.id)
                await deleteGenero(element.id)
                .then(() => {
                    setApagarGeneroDialog(false);
                    setGeneroSelecionado(generoVazio);
                    getGeneros().then((data) => setGeneros(data));
                    toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Genero apagado', life: 3000 });
                })
                .catch((err) => {
                    toast.current.show({ severity: 'error', summary: 'Erro: ' + element.id + ' - ' + element.descricao, detail: err.message, life: 3000 });
                });
        }
    };

    //Apagar Selecionados

    const fecharModalApagarSelecionados = () => {
        setApagarGeneroSelecionadosDialog(false);
    };
    
    const AceitarApagarSelecionados = () => {
        setApagarGeneroSelecionadosDialog(true);
    };

    const ApagarGenerosSelecionados = async () => {
        for (const element of generoSelecionados) {
            await deleteGenero(element.id).then(() => {}).catch((err) => {
                toast.current.show({ severity: 'error', summary: 'Erro: ' + element.id + ' - ' + element.descricao, detail: err.message, life: 3000 });
            });;
        }
    
        getGeneros().then((data) => setGeneros(data));
    
        setApagarGeneroSelecionadosDialog(false);
        setGeneroSelecionados(null);
        toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Generos Apagados', life: 3000 });
    };
    
    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _genero = { ...generoSelecionado };
        _genero[`${name}`] = val;
        setGeneroSelecionado(_genero);
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button style={{lineHeight: 'normal', borderRadius: '50%'}} icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editarGenero(rowData)} />
                <Button style={{lineHeight: 'normal', borderRadius: '50%'}} icon="pi pi-trash" rounded outlined severity="danger" onClick={() => AceitarApagar(rowData)} />
            </React.Fragment>
        );
    };

    return (
        <div className='container' style={{marginTop: '75px'}}>
            <h1>Generos</h1>
            <Toast ref={toast} />
            <div className="card">
                <Toolbar className="mb-4" left={
                    <div className="flex flex-wrap gap-2">
                        <Button style={{lineHeight: 'normal', borderRadius: '6px'}} label="Adicionar" icon="pi pi-plus" severity="success" onClick={ModalAdicionar} />
                        <Button  style={{lineHeight: 'normal', borderRadius: '6px'}} label="Apagar" icon="pi pi-trash" severity="danger" onClick={AceitarApagarSelecionados} disabled={!generoSelecionados || !generoSelecionados.length} />
                    </div>
                }></Toolbar>

                <DataTable ref={dt} value={generos} selection={generoSelecionados} onSelectionChange={(e) => setGeneroSelecionados(e.value)}
                        dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50, 100]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={
                        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
                            <h4 className="m-0">Gerir Generos</h4>
                            <IconField iconPosition="left">
                                <InputIcon className="pi pi-search" />
                                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Pesquisar..." />
                            </IconField>
                        </div>
                }>
                    <Column selectionMode="multiple" exportable={false}></Column>
                    <Column field="id" header="ID" sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="descricao" header="Categoria" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column body={actionBodyTemplate} exportable={false}></Column>
                </DataTable>
            </div>

            <Dialog visible={adicionarDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Gerir Genero" modal className="p-fluid" onHide={fecharModalAdcionar} footer={
                <React.Fragment> 
                    <Button style={{lineHeight: 'normal', borderRadius: '6px', marginRight: '5px'}} label="Cancelar" icon="pi pi-times" outlined onClick={fecharModalAdcionar} /> 
                    <Button style={{lineHeight: 'normal', borderRadius: '6px'}} label="Guardar" icon="pi pi-check" onClick={guardarGenero} />
                </React.Fragment>
            }>
                <div className="field">
                    <label htmlFor="genero" className="font-bold">
                        Genero:
                    </label>
                    <InputText id="genero" value={generoSelecionado.descricao} onChange={(e) => onInputChange(e, 'descricao')} required autoFocus className={classNames({ 'p-invalid': enviado && generoSelecionado.descricao.length <= 4 })} />
                    {enviado && generoSelecionado.descricao.length <= 4 && <small className="p-error">Genero Obrigatorio.</small>}
                </div>
            </Dialog>

            <Dialog visible={ApagarGeneroDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirmar" modal footer={
                <React.Fragment>
                    <Button style={{lineHeight: 'normal', borderRadius: '6px', marginRight: '5px'}} label="Não" icon="pi pi-times" outlined onClick={fecharModalApagar} />
                    <Button style={{lineHeight: 'normal', borderRadius: '6px'}} label="Sim" icon="pi pi-check" severity="danger" onClick={ApagarGenero} />
                </React.Fragment>
            } onHide={fecharModalApagar}>
                <div className="confirmation-content">
                    <div className='d-flex justify-content-start align-content-center align-items-center'>
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {generoSelecionado && (
                        <span style={{marginLeft: '12px'}}>
                            Tem certeza de que deseja apagar
                            <br></br>
                            <b>{generoSelecionado.descricao}</b>?
                        </span>
                    )}
                    </div>
                    
                    
                </div>
            </Dialog>

            <Dialog visible={ApagarGeneroSelecionadosDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirmar" modal footer={
                <React.Fragment>
                    <Button style={{lineHeight: 'normal', borderRadius: '6px',  marginRight: '5px'}} label="Não" icon="pi pi-times" outlined onClick={fecharModalApagarSelecionados} />
                    <Button style={{lineHeight: 'normal', borderRadius: '6px'}} label="Sim" icon="pi pi-check" severity="danger" onClick={ApagarGenerosSelecionados} />
                </React.Fragment>
            } onHide={fecharModalApagarSelecionados}>
                <div className="confirmation-content">
                    <div className='d-flex justify-content-start align-content-center align-items-center'>
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {generoSelecionado && <span style={{marginLeft: '10px'}}>Tem acerteza de que deseja apagar os produtos selecionados?</span>}
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
    
export default Generos;