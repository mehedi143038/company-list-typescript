import axios from 'axios';
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ICompanyWithoutId } from '../Interfaces';

const EditCompany:FC = ()=> {
    const [companyInfo, setCompanyInfo] = useState<ICompanyWithoutId>({
        companyName: '',
        phone: '',
        email: '',
        location: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCompanyInfo({
            ...companyInfo,
            [event.target.name]: event.target.value
        });
    }

    type QuizParams = {
        id: string;
      };
      
      const { id } = useParams<QuizParams>();
    

    useEffect(()=>{
        async function getContact(){
            const res = await axios.get(`https://localhost:7108/api/Company/${id}`);
            setCompanyInfo(res.data);
        }

        getContact();
    },[id]);

    // const handleSubmit = async(event: ChangeEvent<HTMLInputElement>) => {
    //     event.preventDefault();
    //     const res = await axios.put('https://localhost:7108/api/Company', companyInfo)
    //     if(res.status === 200){
    //         alert("Company Updated Successfully.");
    //     }
    // }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Update Company
                            <Link to="/" className="btn btn-primary btn-sm float-end">BACK</Link>
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={async(e: React.SyntheticEvent) => {
                            e.preventDefault();
                            const res = await axios.put('https://localhost:7108/api/Company', companyInfo)
                            if(res.status === 200){
                                alert("Company Updated Successfully.");
                            }
                        }}>
                            <div className="form-group mb-3">
                                <label>Company Name</label>
                                <input required type="text" name="companyName" value={companyInfo.companyName} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label>Phone</label>
                                <input required type="text" name="phone" value={companyInfo.phone} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label>Email</label>
                                <input required type="text" name="email" value={companyInfo.email} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label>Location</label>
                                <input required type="text" name="location" value={companyInfo.location} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <button type="submit" className="btn btn-primary">Update Company</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditCompany;