import './login.css'

const signUpSocials = [
    "google.png",
    "facebook.png",
    "fingerprint.png"
]

const screens = [
    "login",
    "sign",
    "Forgotten Password",
    "Set Password",
    "Set Your Fingerprint",
]

function getButt(index) {
    if (index === 4){
        return (
            <>
                <button
                    type="button" 
                    className="button"
                >
                    Skip
                </button>
                <button
                    type="button" 
                    className="button"
                >
                    Continue
                </button>
            </>
        )
    }else{
        return (
            <button
                type="button" 
                className="button"
            >
                {index === 3 ? "Reset Password" : "Continue"}
            </button>
        )
    }
}

function getInfoBody(index) {
    if (index === 2){
        return(
            <>
                <div className='info__item'>
                    <label htmlFor="account-name-field">Username or email</label>
                    <input type="text" id='account-name-field' />
                </div>
            </>
        )
    }else if(index === 3){
        return(
            <>
                <div className='info__item'>
                    <label htmlFor="password-field">Password</label>
                    <input type="password" id='password-field'/>
                </div>
                <div className='info__item'>
                    <label htmlFor="confPassword-field">Confirm Password</label>
                    <input type="password" id='confPassword-field'/>
                </div>
            </>
        )
    }else if(index === 4){
        return(
            <img 
                src="./ico/fingerprint-white.png" 
                alt=""
            />
        )
    }
}

let screenIndex = 0;

const Login = () => {
    
    if (screenIndex === 0){
        return(
            <div className="login__screen">
                <div className="screen__header">
                    <button type='button' className={`button button-small button-back button-arrow-left `}>
                    </button>
                    <h1 className="header__title">Log in</h1>
                    <button type='button' className={`button-small button-back button-arrow-right button-invisible`}>
                    </button>
                </div>
                <div className="login__body">
                    <din className="login__header">
                        <h2 className="body__title">
                            Welcome
                        </h2>
                        <h3 className="body__subtitle">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus illum fuga vel enim eaque, deserunt est ut adipisci quia eos!
                        </h3>
                    </din>
                    <div className="info">
                        <div className="info__body">
                            <div className='info__item'>
                                <label htmlFor="account-name-field">Username or email</label>
                                <input type="text" id='account-name-field' />
                            </div>
                            <div className='info__item'>
                                <label htmlFor="password-field">Password</label>
                                <input type="password" id='password-field'/>
                            </div>
                            <a href="/" className="button-small">Forgot Password?</a>
                        </div>
                    </div>
                    <button
                        type="button" 
                        className="button"
                    >
                        Log in
                    </button>
                    <div className="login__footer">
                        <h3 className="footeer__subtitle">
                            or sign up with
                        </h3>
                        <div className="login__options">
                            <ul className="login__list">
                                {signUpSocials.map((element) => 
                                    <li>
                                        <img 
                                            src={`./ico/${element}`}
                                            alt="" 
                                        />
                                    </li>
                                )}
                            </ul>
                        </div>
                        <h3 className="footer__extra">
                            Don’t have an account? 
                            <a 
                                href="/" 
                                className='button-small'
                            >
                                Sign Up
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }else if(screenIndex === 1){
        return(
            <div className="signup__screen">
                <div className="screen__header">
                    <button type='button' className={`button button-small button-back button-arrow-left `}>
                    </button>
                    <h1 className="header__title">Create Account</h1>
                    <button type='button' className={`button-small button-back button-arrow-right button-invisible`}>
                    </button>
                </div>
                <div className="login__body">
                    <din className="login__header">
                        <h2 className="body__title">
                            Let`s Start!
                        </h2>
                    </din>
                    <div className="info">
                        <div className="info__body">
                            <div className='info__item'>
                                <label htmlFor="username-field">Username</label>
                                <input type="text" id='username-field' />
                            </div>
                            <div className='info__item'>
                                <label htmlFor="email-field">E-mail</label>
                                <input type="text" id='email-field' />
                            </div>
                            <div className='info__item'>
                                <label htmlFor="password-field">Password</label>
                                <input type="password" id='password-field'/>
                            </div>
                            <div className='info__item'>
                                <label htmlFor="confPassword-field">Confirm Password</label>
                                <input type="password" id='confPassword-field'/>
                            </div>
                        </div>
                    </div>
                    <div className="user__rools">
                        <h3 className="user__rools">
                            By continuing, you agree to <br />
                            <a 
                                href="/" 
                                className="button-small"
                            >
                                Terms of Use
                            </a>
                            and 
                            <a 
                                href="/" 
                                className="button-small"
                            >
                                Privacy Policy.
                            </a>
                        </h3>
                    </div>
                    <button
                        type="button" 
                        className="button"
                    >
                        Sign Up
                    </button>
                    <div className="login__footer">
                        <h3 className="footeer__subtitle">
                            or sign up with
                        </h3>
                        <div className="login__options">
                            <ul className="login__list">
                                {signUpSocials.map((element) => 
                                    <li>
                                        <img 
                                            src={`./ico/${element}`}
                                            alt="" 
                                        />
                                    </li>
                                )}
                            </ul>
                        </div>
                        <h3 className="footer__extra">
                            Already have an account? 
                            <a 
                                href="/" 
                                className='button-small'
                            >
                                Log in
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="setguard__screen">
                <div className="screen__header">
                    <button type='button' className={`button-small button-back button-arrow-left `}>
                    </button>
                    <h1 className="header__title">{screens[screenIndex]}</h1>
                    <button type='button' className={`button-small button-back button-arrow-right button-invisible`}>
                    </button>
                </div>
                <div className="setguard__body">
                    <din className="login__header">
                        {screenIndex === 2 ? <h2 className="body__title">Forgot Password?</h2> : ""}
                        <h3 className="body__subtitle">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus illum fuga vel enim eaque, deserunt est ut adipisci quia eos!
                        </h3>
                    </din>
                    <div className="info">
                        <div className="info__body">
                            {getInfoBody(screenIndex)}
                        </div>
                    </div>
                    {getButt(screenIndex)}
                </div>
            </div>
        )
    }
}

export default Login