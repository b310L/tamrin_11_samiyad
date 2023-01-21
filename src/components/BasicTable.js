import React from 'react'
import { COLUMNS } from "./columns";
import { useTable } from "react-table";

import axios  from "axios";
import { useEffect,useMemo,useState } from "react";

import './table.scss'

const backend_url=`https://yjx7nf.sse.codesandbox.io`;




 const BasicTable = () => {
    const limit_page=10;

    const[DATA,setDATA]=useState([]);
    const[dbSize,setdbSize]=useState([]);
    const fetchData = async () => {
        const response =await axios.get(`${backend_url}/viewAll`).catch((error)=>{
            console.log(error);
        });
        if (response){
            
        const DATA=response.data;
        console.log(DATA);
        setDATA(DATA);
    
            
        }
        const response2 =await axios.get(`${backend_url}/`).catch((error)=>{
            console.log(error);
        });
        if (response2){
            console.log('resp 2    ');
        const dbSize=response2.data;
        console.log(dbSize); 
        setdbSize(dbSize);
        }

    }
    useEffect(() => {
        fetchData();}
       , [])




       const pageClick=(ele)=>{
        const active = document.querySelectorAll(".active");
            active.forEach((element) => {
            element.classList.remove("active");
            });

    ele.target.classList.add("active");
        const number=ele.target.innerHTML;
        const fetchDataPage = async () => {
        const response =await axios.get(`${backend_url}/viewAll/${number}`).catch((error)=>{
            console.log(error);
        });
        if (response){
            
        const DATA=response.data;
        console.log(DATA);
        setDATA(DATA);
        }
       }
       console.log(ele);
       fetchDataPage();
    }
       
       const pages = Math.floor(dbSize / limit_page) + 1;

       const pagination= [];
    //    pagination.push(<a href="#" id='beforePage'>&laquo;</a>);
       for (var i = 1; i <= pages; i++) {
        if (i === 1) 
        {pagination.push(<a className= "page active" key={i}  onClick={pageClick}>{i}</a>);}
        else{pagination.push(<a className= "page" key={i} onClick={pageClick}>{i}</a>);}
        
       }
    //    pagination.push(<a href="#" id='nextPage'>&raquo;</a>);
       console.log(`pagination ====${pagination}`);
       

    //   const columns=useMemo(() => COLUMNS,[])
    //   const data=useMemo(() => DATA,[])
      
      const tableInstance=  useTable({columns:COLUMNS,data:DATA})
      const{getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow}=tableInstance;
  return (
    <>
    <table {...getTableProps()}>
        <thead >
            {headerGroups.map((headerGroup) =>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')} </th>
                    ))}
                
            </tr>
            ))}
            
        </thead>
        <tbody {...getTableBodyProps}>
            {rows.map((row) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {
                            row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                )
                        }
                        )
                    }
                    </tr>
            )
        })}
            
        </tbody>
    </table>
    <div class="pagination">
    <p>  {pagination} </p>
        {/* <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" class="active">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a> */}
    </div>
    </>
  )
}
export default BasicTable