import axios from "axios";
export default async function Login(props) {
    Login(setIsAuth)
    {
        async function handleClick() {
            const response=await
        axios.post("http://localhost:3000/");
        if(response){
            props,setIsAuth(response.data.success);
        }
        else{
            props.setIsAuth(false);
        }
        }
        return(
            <>
            <h1>This is Login</h1>
            <button onClick={handleClick}>Login</button>
            </>
        )
    }
}  