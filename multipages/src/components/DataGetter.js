import React from "react";
import "./DataGetter.css";
import axios from "axios";
import Pagination from './Pagination';

const DataGetter = () => {
  const [posts, setPosts] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [productsPerPage, setProductPerPage] = React.useState(10);
  React.useEffect(() => {
    const fetchPost = async () => {
      setIsLoad(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log("DB result axios", res.data);
      //const postData = res.data.slice(0, 10);
      // setPosts(postData);
      setPosts(res.data);
      console.log(posts);
      setIsLoad(false);
    };

    fetchPost();
  }, []);

  //Pagination Calculation
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct =indexOfLastProduct - productsPerPage;
  const currentProduct =posts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate=(Num)=>{
     setCurrentPage(Num) 
  }

  if (isLoad) {
    return <h2>Loading.....</h2>;
  }

  return (
      <div className="data-container">
<div className="list-group mb-4">
      
      {currentProduct.map((item) => {
        return (
          <li key={item.id} className="list-group-item">
            
              {item.title} {item.body}
            
          </li>
        );
      })}
    
  </div>
  <div>
  <Pagination productsPerPage={productsPerPage} totalProduct={posts.length} paginate={paginate}/>
  </div>
  
      </div>
    
  );
};
export default DataGetter;
