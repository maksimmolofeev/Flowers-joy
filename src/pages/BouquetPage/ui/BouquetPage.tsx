import axios from "axios";
import { BouquetDescription, IBouquet } from "entities/Bouquet";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

const BouquetPage = () => {
    const {id} = useParams()
    const [bouquet, setBouquet] = useState<IBouquet | null>(null)
    const URL = `http://localhost:5000/bouquets/${id}`

    const fetchBouquet = useCallback(async () => {
        try {
            const response = await axios.get(URL)
            setBouquet(response.data)
        } catch (error) {
            alert(error)
        }
    }, [URL])

    useEffect(() => {
        fetchBouquet()
    }, [fetchBouquet])


    return (
        <div>
            <BouquetDescription bouquet={bouquet}/>
        </div>
    );
}

export default BouquetPage