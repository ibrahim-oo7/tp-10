import { useState } from "react"
import { useDispatch } from "react-redux"
import { inscription } from "../Redux/ActionCreator";
import { useNavigate,Link } from "react-router-dom";
export default function Inscription(){
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmation,setConfirmation] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password.trim() !== confirmation.trim()){
            alert('wrong password !');
            return ;
        }
        dispatch(inscription(firstname,lastname,username,email,password))
        navigate('/Connexion')
    }
    const text = {
        color: "#d1d5db",
        fontSize: "13px",
        textAlign: "center",
        fontSize:"16px",
        textDecoration:"none",
        marginTop:"10px"
    }
    const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #020617, #111827)",
        fontFamily: "Arial, sans-serif"
    },
    form: {
        background: "#111827",
        padding: "30px",
        borderRadius: "12px",
        width: "420px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        gap: "12px"
    },
    title: {
        textAlign: "center",
        color: "#fff",
        marginBottom: "10px",
        fontSize: "24px",
        fontWeight: "bold"
    },
    label: {
        color: "#d1d5db",
        fontSize: "13px"
    },
    input: {
        padding: "11px",
        borderRadius: "6px",
        border: "1px solid #374151",
        outline: "none",
        background: "#1f2933",
        color: "#fff",
        fontSize: "14px"
    },
    button: {
        marginTop: "10px",
        padding: "12px",
        borderRadius: "6px",
        border: "none",
        background: "#22c55e",
        color: "#022c22",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "0.3s"
    }
};

    return (
        <>
        <div style={styles.container}>
            
        <form style={styles.form} action="" onSubmit={handleSubmit}>
        <h1 style={styles.title}>Inscription</h1>

        <input style={styles.input} type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} required placeholder="Fisrt name..."/> <br />

        <input style={styles.input} type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required placeholder="Last name..."/> <br />

        <input style={styles.input} type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="User name..."/> <br />

        <input style={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email..."/> <br />

        <input style={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="password..."/> <br />

        <input style={styles.input} type="password" value={confirmation} onChange={(e) => setConfirmation(e.target.value)} required placeholder="verify your password..."/> <br />

        <button style={styles.button}>Submit </button>

        <Link style={text} to="/Connexion">Retour a la page de connexion</Link>

        </form>
        </div>
        </>
    )
}