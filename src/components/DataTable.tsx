import { useState } from 'react'
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', flex: 1, minWidth:110 },
    { field: 'region', headerName: 'Region', flex: 1, minWidth:110 },
    { field: 'years_aged', headerName: 'Years Aged', flex: 1, minWidth:70 },
    { field: 'tastes', headerName: 'Tastes', flex: 3 },
]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([]);
    
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`);
        setTimeout( () => {window.location.reload()}, 500)
    }

  return (
    <div>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div className='mx-3'>
                <button 
                    onClick={() => {handleOpen(); setSelectionModel([])}}
                    className='p-2 my-3 bg-white bg-opacity-80 border 
                        border-transparent hover:border-slate-100 
                        hover:bg-white hover:bg-opacity-100 rounded-sm'
                >
                    Add A Whiskey
                </button>
            </div>
            <div className='mx-3'>
                {selectionModel.length > 0 ? 
                    (<button 
                        onClick={handleOpen}
                        className='p-2 my-3 bg-white bg-opacity-80 border 
                            border-transparent hover:border-slate-100 
                            hover:bg-white hover:bg-opacity-100 rounded-sm'
                    >
                        Update
                    </button>) :
                    (<div 
                        className='p-2 my-3 bg-slate-800 bg-opacity-80 
                            text-white border border-transparent rounded-sm'
                    >
                        Update
                        
                    </div>)
                }
            </div>
            <div className='mx-3'>
                { selectionModel.length > 0 ? 
                    (<button 
                        onClick={deleteData}
                        className='p-2 my-3 bg-white bg-opacity-80 border 
                            border-transparent hover:border-slate-100 
                            hover:bg-white hover:bg-opacity-100 rounded-sm'
                    >
                        Delete
                    </button>) :
                    (<div 
                        className='p-2 my-3 bg-slate-800 bg-opacity-80 
                            text-white border border-transparent rounded-sm'
                    >
                        Delete
                        
                    </div>)
                }
            </div>
        </div>
        <div className='flex justify-center'>
            <div 
                className={ open ? "hidden" : 
                "container my-5 flex flex-col justify-center w-screen max-w-screen-lg h-[26rem]"
                }
            >
                <h2 className="p-3 bg-white bg-opacity-80 my-2 rounded 
                    text-center text-xl"
                >
                    My Whiskies
                </h2>
                <DataGrid rows={contactData} columns={columns} 
                columnVisibilityModel={{id: false}}
                pageSizeOptions={[100]} checkboxSelection={true}
                onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                className='bg-white bg-opacity-80'
                />
            </div>
        </div>
    </div>
  )
}

export default DataTable