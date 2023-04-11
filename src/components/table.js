import { useState, useEffect } from "react"
import axios from "axios"
import style from "./table.module.css"


function Table() {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const removeUser = (index) => {
        posts.splice(index, 1);
        setPosts([...posts]);
      };

    return (
        <table>
            <thead>
                <tr className={style.tableHeader}>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((ele, index) => {
                  return  <tr key={index} className={style.tableData}>
                        <td>{ele.id}</td>
                        <td>{ele.title}</td>
                        <td>{ele.body}</td>
                        <td onClick={removeUser} className={style.btn}>X</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Table;