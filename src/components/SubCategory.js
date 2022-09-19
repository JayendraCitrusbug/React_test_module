import React, { useEffect, useState } from 'react'
import axios from 'axios'

function SubCategory(props) {

    let l = []
    const [list, setList] = useState([])

    const access = localStorage.access
    const token = "Bearer " + access

    useEffect(() => {
        axios({
            url: `http://43.204.196.131:9300/api/v1/subcategory/${props.name}/`,
            method: "GET",
            headers: {
                "Authorization": `${token}`,
            }

        })
            .then((res) => {
                for (let i = 0; i < res.data.data.length; i++) {
                    l.push(<li key={res.data.data[i].id}><a href="us_sales.html">{res.data.data[i].sub_category_name}</a></li>)
                }
                setList(l)
            })
            .catch((err) => {
                console.log("err :", err);
            })
    })

    return (
        <>
            {list}
        </>
    )
}

export default SubCategory