import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

export default function Details(){
    const product = useSelector(state => state.products.productDetails);
    const navigate = useNavigate();

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
            fontSize: "16px"
        },
        btnLogout: {
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#22c55e",
            color: "#022c22",
            cursor: "pointer",
            fontWeight: "bold"
        },
        card: {
            maxWidth: "600px",
            margin: "0 auto",
            background: "#1f2933",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            textAlign: "center"
        },
        image: {
            width: "100%",
            maxHeight: "300px",
            objectFit: "contain",
            borderRadius: "15px",
            background: "#fff",
            padding: "10px"
        },
        title: {
            fontSize: "24px",
            fontWeight: "bold"
        },
        price: {
            fontSize: "20px",
            color: "#22c55e",
            fontWeight: "bold"
        },
        category: {
            fontStyle: "italic",
            opacity: "0.8"
        },
        description: {
            lineHeight: "1.6",
            opacity: "0.9"
        }
    };

    return (
        <div style={styles.container}>
            
            <div style={styles.header}>
                <div style={styles.logoSection}>
                    <img src="logo.png" alt="logo" style={styles.logo} onClick={() => navigate('/Acceuil')} />
                    <p style={{cursor:"pointer"}} onClick={() => navigate('/Acceuil')}>logo</p>
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

            
            <div style={styles.card}>
                <img src={product.image} alt={product.title} style={styles.image} />
                <p style={styles.title}>{product.title}</p>
                <p style={styles.price}>{product.price} DH</p>
                <p style={styles.category}>{product.category}</p>
                <p style={styles.description}>{product.description}</p>
            </div>
        </div>
    )
}
