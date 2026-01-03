import { useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { supprimer,supprimrtTous,supprimerQuantit } from "../Redux/ActionCreator";
export default function Panier() {
    const navigate = useNavigate();
    const items = useSelector(state => state.cart.items);
    const user = useSelector(state => state.authentification.user);
    const dispatch = useDispatch();

    let totalQuantity = 0;
    let prixTotalproduit = 0;
    items.forEach(item => {
        totalQuantity += item.quantity;
        prixTotalproduit += item.quantity * item.price;
    });
   
    const btnSupprimer = {
        padding:"10px",
        border:"none",
        borderRadius:"20px",
        backgroundColor:"red",
        color:"white",
        marginTop:"20px",
        cursor:"pointer"
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
        panierGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px"
        },
        panierCard: {
            background: "#1f2933",
            padding: "15px",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "0.3s",
        },
        panierCardHover: {
            transform: "scale(1.05)"
        },
        image: {
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "10px"
        },
        title: {
            fontWeight: "bold",
            fontSize: "18px",
            marginBottom: "5px"
        },
        category: {
            fontSize: "14px",
            color: "#a1a1aa",
            marginBottom: "5px"
        },
        price: {
            fontWeight: "bold",
            color: "#22c55e",
            marginBottom: "5px"
        },
        quantity: {
            fontSize: "14px",
            marginBottom: "10px"
        },
        totals: {
            marginTop: "30px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold"
        }
    };

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

            <div style={styles.panierGrid}>
                {items.map((item,index) => (
                    <div 
                        key={index} 
                        style={styles.panierCard} 
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    >
                        <img src={item.image} alt={item.title} style={styles.image} />
                        <p style={styles.title}>{item.title}</p>
                        <p style={styles.category}>{item.category}</p>
                        <p style={styles.price}>Price: {item.price} €</p>
                        <p style={styles.quantity}>Quantity: {item.quantity}</p>
                        <div style={{
                            display:"flex",
                            gap:"20px"
                        }}>
                            <button 
                            style={{
                                padding: "8px 15px",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                transition: "0.2s",
                                backgroundColor: "#3b82f6",
                                color: "#fff"
                            }} 
                                onClick={() => dispatch(supprimer(index))}
                                >
                                supprimer
                            </button>
                            <button 
                            style={{
                                padding: "8px 15px",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                transition: "0.2s",
                                backgroundColor: "#6b7280",
                                color: "#fff"
                            }} 
                            onClick={() => dispatch(supprimerQuantit(item))}>-</button>
                        </div>
                    </div>
                    
                ))}
            </div>
            {items.length !== 0  ? <button  style={btnSupprimer}  onClick={() => dispatch(supprimrtTous())}>supprimer tous !</button>
                        : `aucun produit dans la list de Panier`}
            <div style={styles.totals}>
                <p>Total Quantity: {totalQuantity}</p>
                <p>Total Price: {prixTotalproduit.toFixed(2)} €</p>
            </div>
        </div>
    )
}
