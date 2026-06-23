import './boarding.css'
const flag = false

let slideIndex = 1;

const titleText = [
    "Start your journey towards a more active lifestyle",
    "Find nutrition tips that fit your lifestyle",
    "A community for you, challenge yourself",
]

const buttonText = [
    "Next",
    "Next",
    "Get Started"
]

const Boarding = () => {

    if (slideIndex === 1){
    return (
        <div className='boarding__body'>
            <h1 className='boarding__title'>Welcome to</h1>
            <div className="boarding__img">
                <img
                    src='../ico/logo-main.png'
                >
                </img>
                <img
                    src='../ico/logo-title.png'
                >
                </img>
            </div>
        </div>
    )
    }else{
        return(
            <div className={`boarding__body  body-${slideIndex}`}>
                <div className={`${(slideIndex === 4) ? 'visually-hidden' : 'boarding__skip'}`}>
                    <button type='button' className={`button button-small button-skip button-arrow-right `}>
                        Skip
                    </button>
                </div>
                <div className='boarding__info'>
                    <div className="info">
                        <div className="info__body">
                            <img 
                                src={`./ico/boarding-${slideIndex}.png`}
                                alt="" 
                            />
                            <h2 className="info__title">
                                {titleText[slideIndex - 2]}
                            </h2>
                            <div className="info__whill">
                                <span className={`whill__line ${slideIndex === 2 ? 'is-active' : ''}`}></span>
                                <span className={`whill__line ${slideIndex === 3 ? 'is-active' : ''}`}></span>
                                <span className={`whill__line ${slideIndex === 4 ? 'is-active' : ''}`}></span>
                            </div>
                        </div>
                    </div>
                    <button className='button' type='button'>
                        {buttonText[slideIndex - 2]}
                    </button>
                </div>
            </div>
        )
    }
}

export default Boarding