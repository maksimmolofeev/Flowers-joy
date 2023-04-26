import axios from "axios";
import { IBouquet } from "entities/BouquetCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BouquetPage = () => {
    const {id} = useParams()
    const [bouquet, setBouquet] = useState<IBouquet>()

    const fetchBouquet = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/bouquets/${id}`)
            setBouquet(response.data)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        fetchBouquet()
    }, [])

    console.log(bouquet)
    return (
        <div>
            BOUQUET
        </div>
    );
}

export default BouquetPage