import React from 'react';

 const  Pagination =({productsPerPage, totalProduct,paginate})=> {
     const pageNumbers =[]
     for(let i=1; i<= Math.ceil(totalProduct/productsPerPage); i++){
         pageNumbers.push(i)
     }
    return (
        <nav style={{display: 'flex'}}>
            <ul className="pagination">
                {pageNumbers.map((pageNum)=>{
 return(
     <p key={pageNum} className="page-item">
         <a onClick={()=>paginate(pageNum)} href="!#" className="page-link">{pageNum}</a>
     </p>
 )
                })}

            </ul>
            
        </nav>
    )
}
export default Pagination;