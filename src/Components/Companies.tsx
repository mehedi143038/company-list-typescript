import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ICompany } from '../Interfaces';

const Companies:FC = ()=> {
    const [companies, setCompanies] = useState<ICompany[]>([]);
    useEffect(()=>{
        const getCompanies = async() => {
            const res = await axios.get('https://localhost:7108/api/Company');
            setCompanies(res.data);
        }
        getCompanies();
    },[]);

    const handleDelete = async(id:number)=>{
        try{
            let result:boolean = window.confirm("Want to delete?");
            if (result) {
                const response = await axios.delete(`https://localhost:7108/api/Company/${id}`);
                if(response.status === 200){
                    alert("Company Deleted Successfully");
                }
                const res = await axios.get('https://localhost:7108/api/Company');
                setCompanies(res.data);
            }
        } catch {
        }
    }
    var table_HTML_Input:any;
    table_HTML_Input = companies.map((item: ICompany, key:number)=>{
        return (
            <tr key={item.companyId}>
                <td>{item.companyId}</td>
                <td>{item.companyName}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.location}</td>
                <td><Link to={`/edit-company/${item.companyId}`} className="btn btn-primary btn-sm">Edit</Link></td>
                <td><button type="button" className='btn btn-danger' onClick={()=>{handleDelete(item.companyId)}}>Delete</button></td>
            </tr>
        )
    })

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h4>
                            All Contacts
                            <Link to='/add-company' className='btn btn-primary btn-sm float-end'>Add New Company</Link>
                        </h4>
                    </div>
                    <div className='card-body'>
                        <table className='table table-responsive table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <td>Company Id</td>
                                    <td>Company Name</td>
                                    <td>Phone</td>
                                    <td>Email</td>
                                    <td>Location</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {table_HTML_Input}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Companies;