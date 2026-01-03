import { AddProduct } from "../Redux/ActionCreator";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddProduit() {
    const dispatch = useDispatch();
    const [image,setImage] = useState(null);
    const [title,settitle] = useState('');
    const [category,setCategory] = useState('');
    const [price,setprice] = useState('');
    const [id,setId] = useState('');
    const [description,setDescription] = useState('');
    const navigate = useNavigate();

    const products = useSelector(state => state.products.products);
    const user = useSelector(state => state.authentification.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        const exists = products.find(product => product.id === Number(id));
        if(exists){
            alert("l'id de ce produit deja exists !!");
            return;
        }

        dispatch(AddProduct(
            Number(id),
            title,
            Number(price),
            category,
            description,
            URL.createObjectURL(image),
        ));
        navigate('/Produits');
    }

    const styles = {
        container: {
            minHeight: "100vh",
            background: "#111827",
            color: "#fff",
            fontFamily: "Arial, sans-serif",
            padding: "20px"
        },
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap:"wrap",
            background: "#1f2933",
            padding: "20px",
            borderRadius: "20px",
            marginBottom: "30px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
        },
        logoSection: {
            display: "flex",
            alignItems: "center",
            gap: "15px"
        },
        logo: {
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            cursor: "pointer"
        },
        nav: {
            display: "flex",
            gap: "30px",
            alignItems: "center"
        },
        navItem: {
            cursor: "pointer",
            fontSize: "16px",
            transition: "0.2s",
        },
        btnLogout: {
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#22c55e",
            color: "#022c22",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
        },
        form: {
            background: "#1f2933",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto"
        },
        label: {
            fontWeight: "bold",
            marginBottom: "5px"
        },
        input: {
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "16px"
        },
        button: {
            marginTop: "20px",
            padding: "12px 25px",
            borderRadius: "10px",
            backgroundColor: "#22c55e",
            color: "#022c22",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "0.2s"
        },
    }

    return (
        <div style={styles.container}>
            
            <div style={styles.header}>
                <div style={styles.logoSection}>
                    <img src='logo.png' alt="logo" style={styles.logo} onClick={() => navigate('/Acceuil')} />
                    <p style={{cursor:"pointer"}} onClick={() => navigate('/Acceuil')}>{user}</p>
                </div>

                <div style={styles.nav}>
                    <p style={styles.navItem} onClick={() => navigate('/Apropos')}>About</p>
                    <p style={styles.navItem} onClick={() => navigate('/Produits')}>Product</p>
                    <p style={styles.navItem} onClick={() => navigate('/Panier')}>Panier</p>
 <button onClick={() => navigate('/Connexion')} class="cssbuttons-io-button">
                    log out
                    <div class="icon">
                        <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                            fill="currentColor"
                        ></path>
                        </svg>
                    </div>
                    </button>              
                    </div>
            </div>

            
            <form style={styles.form} onSubmit={handleSubmit}>
                <label style={styles.label}>Image :</label>
                <input type="file" 
                    onChange={(e) => setImage(e.target.files[0])}
                    style={styles.input} 
                />

                <label style={styles.label}>ID :</label>
                <input type="text" 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    style={styles.input}
                />

                <label style={styles.label}>Description :</label>
                <input type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={styles.input}
                />

                <label style={styles.label}>Name :</label>
                <input type="text" 
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    style={styles.input}
                />

                <label style={styles.label}>Category :</label>
                <input type="text" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={styles.input}
                />

                <label style={styles.label}>Price :</label>
                <input type="number" 
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                    style={styles.input}
                />

                <button style={styles.button}>Add Product</button>
            </form>
        </div>
    )
}

