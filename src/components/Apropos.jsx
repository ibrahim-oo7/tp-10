import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Apropo() {
    const navigate = useNavigate();
    const user = useSelector(state => state.authentification.user);

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
        navItemHover: {
            color: "#22c55e"
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
        aboutText: {
            maxWidth: "800px",
            margin: "30px auto",
            lineHeight: "1.8",
            fontSize: "16px",
            background: "#1f2933",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
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

            <div style={styles.aboutText}>
                <p>
                Bienvenue à notre mini boutique ! Ici, vous trouverez une sélection de produits soigneusement choisis pour répondre à tous vos besoins.  
                Nous nous engageons à offrir qualité, fiabilité et satisfaction à chacun de nos clients.  
                Parcourez nos produits, découvrez les nouveautés et profitez d’une expérience d’achat simple et agréable.
                </p>
            </div>
        </div>
    )
}
