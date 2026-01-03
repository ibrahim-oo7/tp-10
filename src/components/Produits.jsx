import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { AddPanier,details,filtre } from "../Redux/ActionCreator";
import { useState,useEffect } from "react";
export default function Products(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const produits = useSelector(state => state.products.products);
    const user = useSelector(state => state.authentification.user);
    const filterProducts = useSelector(state => state.products.filteredProducts)
    const [inputValue,setInputValue] = useState('');

    useEffect(() => {
    dispatch(filtre(""));
    }, []);


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
            marginBottom:"50px"
        },
        count: {
            textAlign: "center",
            fontSize: "18px",
            margin: "20px 0"
        },
        productsGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px"
        },
        productCard: {
            background: "#1f2933",
            padding: "15px",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "0.3s",
        },
        productCardHover: {
            transform: "scale(1.05)"
        },
        productImage: {
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "10px"
        },
        productTitle: {
            fontWeight: "bold",
            fontSize: "18px",
            marginBottom: "5px"
        },
        productCategory: {
            fontSize: "14px",
            color: "#a1a1aa",
            marginBottom: "5px"
        },
        productPrice: {
            fontWeight: "bold",
            color: "#22c55e",
            marginBottom: "10px"
        },
        btnGroup: {
            display: "flex",
            gap: "10px",
            marginTop: "10px"
        },
        btnAction: {
            padding: "8px 15px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.2s",
        },
        btnAddPanier: {
            backgroundColor: "#3b82f6",
            color: "#fff"
        },
        btnDetails: {
            backgroundColor: "#6b7280",
            color: "#fff"
        },
        addProductBtn: {
            marginTop: "30px",
            padding: "12px 25px",
            borderRadius: "10px",
            backgroundColor: "#22c55e",
            color: "#022c22",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            display: "block",
            marginLeft: "auto"
        }
    }

    return(
        <>
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
            <div >
                <p style={styles.count}>
                {produits.length ? `Le nombre de produits est : ${produits.length}` : ``}
            </p>
            <div style={{
                display:"flex",
                alignItems:"center",
                flexWrap:"wrap",
                justifyContent:"space-between"

            }}> 
            <div style={{
            display:"flex",
             alignItems: "center",
             marginTop:"25px"
           }}>
             <input style={{
                margin:"20px",
                padding:"10px",
                border:"none",
                borderRadius:"30px"
            }} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="rechecher..."/>
            <button style={{
                padding:'10px',
                border:"none",
                borderRadius:"10px",
                backgroundColor:"#22c55e",
                cursor:"pointer"
            }} onClick={() => {
                dispatch(filtre(inputValue.trim().toLowerCase()))
            }}>Rechercher</button>
            </div>
             <button style={styles.addProductBtn} onClick={() => navigate('/AjouterProduit')}>Add Product</button>
      
                </div>      
            </div>

            <div style={styles.productsGrid}>
                {filterProducts.map((produit,index) => (
                    <div 
                        key={produit.id} 
                        style={styles.productCard} 
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    >
                        <img src={produit.image} alt="" style={styles.productImage} />
                        <p style={styles.productTitle}>{produit.title}</p>
                        <p style={styles.productCategory}>{produit.category}</p>
                        <p style={styles.productPrice}>Price : {produit.price} €</p>

                        <div style={styles.btnGroup}>
                            <button 
                                style={{...styles.btnAction, ...styles.btnAddPanier}} 
                                onClick={() => dispatch(AddPanier(produits[index]))}
                            >
                                Ajouter au panier
                            </button>
                            <button 
                                style={{...styles.btnAction, ...styles.btnDetails}}
                                onClick={() => {
                                    dispatch(details(produit))
                                    navigate('/Details');
                                }}
                            >
                                Afficher le details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

           
        </div>     
        </>
    )
}