import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
export default function Acceuil() {
    const user = useSelector(state => state.authentification.user);
    const navigate = useNavigate();
    const isMobile = window.innerWidth <= 768;
    const styles = {
        container: {
            minHeight: "100vh",
            background: "#111827",
            fontFamily: "Arial, sans-serif",
            color: "#fff",
            padding: "20px"
        },
       header: {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        background: "#1f2933",
        padding: "20px",
        borderRadius: "20px",
        marginBottom: "30px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        gap: isMobile ? "15px" : "0"
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
        navItemHover: {
            color: "#22c55e"
        },
        welcome: {
            textAlign: "center",
            fontSize: "28px",
            marginTop: "50px",
            fontWeight: "bold"
        }
    }
    

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.logoSection}>
                    <img 
                        src='logo.png' 
                        alt="logo" 
                        style={styles.logo} 
                        onClick={() => navigate('/Acceuil')}
                    />
                    <p>{user}</p>
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

            <h1 style={styles.welcome}>Welcome to our Shop page</h1>
            <div style={{
    marginTop: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "40px",
    background: "#1f2933",
    padding: "40px",
    borderRadius: "25px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
}}>
    <div style={{
        maxWidth: "500px"
    }}>
        <h2 style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px"
        }}>
            Discover Quality Products
        </h2>
        <p style={{
            fontSize: "16px",
            lineHeight: "1.7",
            opacity: 0.85,
            marginBottom: "25px"
        }}>
            Explore our collection of premium products carefully selected
            to match your style and daily needs. Simple shopping, fast access,
            and the best prices — all in one place.
        </p>
        <button className="btn"
        onClick={() => navigate('/Produits')}
        >
            Shop Now
        </button>
    </div>

    <img
        src="store.jpg"
        alt="shop"
        style={{
            width: "420px",
            borderRadius: "20px",
            objectFit: "cover"
        }}
    />
</div>

        </div>
    )
}
