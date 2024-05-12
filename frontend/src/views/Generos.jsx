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

    const [products, setGeneros] = useState(null);
    const [adicionarDialog, setAdicionarDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [genero, setGenero] = useState(generoVazio);
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
        setGenero(generoVazio);
        setAdicionarDialog(true);
    };

    const editarGenero = (gen) => {
        setGenero({ ...gen });
        setAdicionarDialog(true);
    };

    const fecharModalAdcionar = () => {
        setEnviado(false);
        setAdicionarDialog(false);
    };


    const guardarGenero = () => {
        setEnviado(true);
        if(genero.descricao.length >= 4 ){
            if(genero.id == null){
                addGenero(genero).then(() => {
                    setAdicionarDialog(false);
                    toast.current.show({ severity:'success', summary: 'Sucesso', detail: 'Genero Adicionado!', life: 3000 });
                    getGeneros().then((data) => setGeneros(data));
                }).catch(() => {
                    toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel adicionar o genero!', life: 3000 });
                });
            }
            else{
                updateGenero(genero).then(() => {
                    setAdicionarDialog(false);
                    toast.current.show({ severity:'success', summary: 'Sucesso', detail: 'Genero Alterado!', life: 3000 });
                    getGeneros().then((data) => setGeneros(data));
                }).catch(() => {
                    toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Não foi possivel adicionar o genero!', life: 3000 });
                });
            }
            setGenero(generoVazio);
        }
    };

    //Apagar Linha

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const confirmDeleteProduct = (product) => {
        setGenero(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = async () => {

        for (const element of products) {
            if(element.id === genero.id)
                await deleteGenero(element.id);
        }

        getGeneros().then((data) => setGeneros(data));
        
        setDeleteProductDialog(false);
        setGenero(generoVazio);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    };

    //Apagar Selecionados

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };
    
    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = async () => {
        for (const element of generoSelecionados) {
            await deleteGenero(element.id);
        }
    
        getGeneros().then((data) => setGeneros(data));
    
        setDeleteProductsDialog(false);
        setGeneroSelecionados(null);
        toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Generos Apagados', life: 3000 });
    };
    
    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _genero = { ...genero };
        _genero[`${name}`] = val;
        setGenero(_genero);
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editarGenero(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="Não" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Sim," icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="Não" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Sim" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    return (
        <div className='container' style={{marginTop: '75px'}}>
            <h1>Generos</h1>
            <Toast ref={toast} />
            <div className="card">
                <Toolbar className="mb-4" left={
                    <div className="flex flex-wrap gap-2">
                        <Button label="Adicionar" icon="pi pi-plus" severity="success" onClick={ModalAdicionar} />
                        <Button label="Apagar" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!generoSelecionados || !generoSelecionados.length} />
                    </div>
                }></Toolbar>

                <DataTable ref={dt} value={products} selection={generoSelecionados} onSelectionChange={(e) => setGeneroSelecionados(e.value)}
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
                    <Button label="Cancelar" icon="pi pi-times" outlined onClick={fecharModalAdcionar} /> 
                    <Button label="Guardar" icon="pi pi-check" onClick={guardarGenero} />
                </React.Fragment>
            }>
                <div className="field">
                    <label htmlFor="genero" className="font-bold">
                        Genero:
                    </label>
                    <InputText id="genero" value={genero.descricao} onChange={(e) => onInputChange(e, 'descricao')} required autoFocus className={classNames({ 'p-invalid': enviado && genero.descricao.length <= 4 })} />
                    {enviado && genero.descricao.length <= 4 && <small className="p-error">Genero Obrigatorio.</small>}
                </div>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {genero && (
                        <span>
                            Are you sure you want to delete <b>{genero.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {genero && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    );
}
    
export default Generos;