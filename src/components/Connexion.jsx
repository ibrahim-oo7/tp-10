import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../Redux/ActionCreator";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Login(){
    const dispatch = useDispatch();
    const users = useSelector(state => state.authentification.users);

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const navigate  = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const userFind = users.find(
            u => u.username === username && u.password === password
        );
        if(!userFind) {
            alert("login ou mot de passe n’est pas valide");
            return;
        } 
        dispatch(login(userFind.username));
        navigate('/Acceuil');
    }

    const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1f2933, #111827)",
        fontFamily: "Arial, sans-serif"
    },
    form: {
        background: "#111827",
        padding: "30px",
        borderRadius: "10px",
        width: "350px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
    },
    title: {
        textAlign: "center",
        color: "#fff",
        marginBottom: "10px",
        fontSize: "22px",
        fontWeight: "bold"
    },
    input: {
        padding: "12px",
        borderRadius: "6px",
        border: "1px solid #374151",
        outline: "none",
        background: "#1f2933",
        color: "#fff",
        fontSize: "14px"
    },
    button: {
        padding: "12px",
        borderRadius: "6px",
        border: "none",
        background: "#2563eb",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "0.3s"
    },
    text: {
        color: "#d1d5db",
        fontSize: "13px",
        textAlign: "center"
    },
    link: {
        color: "#60a5fa",
        textDecoration: "none",
        fontWeight: "bold"
    }
};

    return(
        <>
        <div style={styles.container}>
            <form style={styles.form} action="" onSubmit={handleLogin}>
            <h2 style={styles.title}>Connexion</h2>
            <input style={styles.input} type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username..."
            />
            <input style={styles.input} type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password..."
            />
            <button style={styles.button} >Login</button>
            <p style={styles.text}>Si vous n’êtes pas inscrit, <Link style={styles.link} to='/Inscription'>inscrivez-vous maintenant !!!</Link></p>
        </form>
        </div>
        
        </>
    )
}