import React from 'react'
import { useState, useRef, useEffect} from 'react'
const LOGIN_URL = '/users'

const Login = () => {

    const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');
  const [success, SetSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErr('');
    
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUser('');
      setPwd('');
      const res = await axios.post(LOGIN_URL,
        JSON.stringify({user, pwd}),
        {
          headers : {'Content-Type' : 'application/json'},
          withCredentials : true
        }
      );
      //console.log(JSON.stringify(res))
      //const id = res?.data?.id;
      //const token = res?.data?.token
      
      SetSuccess(true);

    } 
    catch (error) {
      if (!error?.res) {
        setErr('No server Response');
      }else if(error.res?.status === 400){
        setErr('Missing username or password');
      }else if(error.res?.status === 401){
        setErr('Unauthorized');
      }else{
        setErr('Login failed');
      }
    }
  }

  return (
    <>
      <div className="text-center my-[30%] xl:my-[140px] lg:my-[140px] md:my-[140px] pt-8 pb-[40px] bg-black flex flex-col mx-[60px] xl:mx-[30%] lg:mx-[30%] md:mx-[25%] rounded-[40px]">
        <h1 className="text-[2em] mb-10 text-white">Login</h1>
      <form onSubmit={handleSubmit}>
        <div ref = {errRef} className={err ? "errmsg text-white" : "offscreen"} >{err}</div>
        <div className="block mb-10">
        <label htmlFor="username" className='text-white'>Username: </label>
        <input type="text" required placeholder='username' ref = {userRef} onChange = {(e) => setUser(e.target.value)} autoComplete = "off" className='rounded-xl' value={user}/>
        </div>
        <div className="block">
        <label htmlFor="username" className='text-white'>Password: </label>
        <input type="password" required autoComplete='off' onChange={(e) => setPwd(e.target.value)} value= {pwd} placeholder='Password' className='rounded-xl'/>
        </div>
        <div className="block mt-10">
          <button className="bg-white hover:bg-slate-400 px-5 rounded-md">Login</button>
        </div>
        <div className="text-white mono pt-5">Please login with Linkedin Credentials</div>
      </form>
      </div>
    </>
  )
}

export default Login
